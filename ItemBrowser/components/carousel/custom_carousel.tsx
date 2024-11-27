import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, ViewToken, useWindowDimensions } from 'react-native';
import Animated, {
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

import HomeCarouselData from '../../data/home_carousel_data'; // 画像参照とURLの構造データ
import CustomCarrouselPagination from './custom_carousel_pagination';
import CustomCarouselRender from './custom_carousel_render';

export default function CustomCarousel() {
  const {width} = useWindowDimensions(); // 画面の幅
  const height = 190; // カルーセルの高さ
  const ref = useAnimatedRef<Animated.FlatList<any>>(); // 画像リストの入れ物、実体
  const [currentIndex, setCurrentIndex] = useState(0); // 画像群のインデックス
  const [paginationIndex, setPaginationIndex] = useState(0); // 今回は1ページ1アイテムだからcurrentIndexと同じ数字になる
  const [copyData, setCopyData] = useState(HomeCarouselData);
  const currentX = useSharedValue(0); // スクロール位置。画像行の左上を0として右に行くほど増える
  const releasedX = useSharedValue(0); // スクロール終了位置。
  const [isAutoPlay, setIsAutoPlay] = useState(true); // 自動遷移がオンかオフか
  const interval = useRef<NodeJS.Timeout>(); // 自動遷移関数にIDをつけてキャンセルなどができるように管理するための変数

  // 表示されている画像が変化するたびに呼び出される
  const onViewableItemsChanged = ({
    viewableItems,
  }: {
    // 表示されているアイテムに関する情報を持つ
    viewableItems: ViewToken[];
  }) => {
    if (
      viewableItems[0]?.index !== undefined &&
      viewableItems[0]?.index !== null
    ) {
      setCurrentIndex(viewableItems[0].index);
      // 循環させるために余りを用いる
      setPaginationIndex(viewableItems[0].index % HomeCarouselData.length);
    }
  };
  const viewabilityConfig = {
    itemVisiblePercentThreshold: 100,
  };

  // viewablityConfigの値を上回るとonViewableItemChangedが呼び出される
  const viewabilityConfigCallbackPairs = useRef([
    {viewabilityConfig, onViewableItemsChanged},
  ]);


  const onScroll = useAnimatedScrollHandler({
    onScroll: e => {
      currentX.value = e.contentOffset.x;
    },
    onMomentumEnd: e => {
      releasedX.value = e.contentOffset.x;
    },
  });

  // スクロールしたときに中央で止まるようにする。
  // releasedX.value や refの変化するたびに呼び出される
  // 引数はスクロールさせたい要素の参照 (ref)、目標とする位置 (releasedX.value)、アニメーションの持続時間 (0 で即時スクロール)、スムーズなスクロールを行うかどうかのフラグ (true) 
  useDerivedValue(() => {
    scrollTo(ref, releasedX.value, 300, true);
  });


  // 自動遷移の関数
  // isAutoPlay, releasedX, widthの変化のたびに呼び出される
  // 手動スクロール時にキャンセルされ破棄される
  useEffect(() => {
    if (isAutoPlay === true) {
      interval.current = setInterval(() => {
        releasedX.value = releasedX.value + width;
      }, 4000);
    } else {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [isAutoPlay, releasedX, width]);


  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        style={[styles.flatList, { height: height }]}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onScrollBeginDrag={() => {
          setIsAutoPlay(false);
        }}
        onScrollEndDrag={() => {
          setIsAutoPlay(true);
        }}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal={true}
        bounces={false}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setCopyData([...copyData, ...HomeCarouselData])}
        removeClippedSubviews={true}
        onEndReachedThreshold={0.5}
        data={copyData}
        keyExtractor={(_, index) => `list_item${index}`}
        renderItem={({item, index}) => {
          return <CustomCarouselRender  image={item} index={index} x={currentX} height={height}/>;
        }}
      />
      <View style={styles.paginationContainer}>
        <CustomCarrouselPagination paginationIndex={paginationIndex} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatList: {
    flexGrow: 0
  },
  paginationContainer: {
    position: 'absolute',
    zIndex: 1,
    bottom: 0, // 画像から下方向へのマージン
    right: 50,  // 画像から右方向へのマージン
  }
})