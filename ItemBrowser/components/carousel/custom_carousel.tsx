import React, { useRef, useEffect } from 'react';
import { FlatList, View, StyleSheet, Image, Text, Dimensions } from 'react-native';

import { DataType } from '../../data/home_carousel_data'; // データ構造のインポート

type Props = {
  data: DataType[]; // 親から渡されるデータの型
};

const { width } = Dimensions.get('window');

export default function CustomCarousel({ data }: Props) {
  const flatListRef = useRef<FlatList<DataType>>(null); // FlatList の参照を保持
  const scrollIndex = useRef(0); // 現在のスクロール位置を追跡

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollIndex.current < data.length - 1) {
        scrollIndex.current += 1;
      } else {
        scrollIndex.current = 0; // 最後のアイテムまで到達したら最初に戻る
      }

      flatListRef.current?.scrollToIndex({
        index: scrollIndex.current,
        animated: true, // アニメーション付きでスクロール
      });
    }, 3000); // 3秒ごとにスクロール

    return () => clearInterval(interval); // コンポーネントがアンマウントされるときにタイマーをクリア
  }, [data]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef} // FlatList を参照に割り当て
        data={data} // 親から渡されたデータを使用
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: width, // 各アイテムの幅を画面幅に設定
    borderRadius: 20,
    paddingHorizontal: 30,
    overflow: 'hidden',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
