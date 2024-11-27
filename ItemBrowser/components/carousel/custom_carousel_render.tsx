/* xの値を、画像の透明度に対応する値に変換します。
xが現在の画像の中心に近いほど、透明度は1に近づき、画像がはっきりと表示されます。
xが他の画像の中心に近いほど、透明度は0に近づき、画像が薄れていきます。 */

import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { DataType } from '../../data/home_carousel_data';

type Props = {
  image: DataType;
  index: number;
  x: SharedValue<number>;
  height: number;
};

const CustomCarouselRender = ({image, index, x, height}: Props) => {
  const {width} = useWindowDimensions();

  const animatedStyle = useAnimatedStyle(() => {
    const opacityAnim = interpolate(
      x.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [-2, 1, -2],
      Extrapolation.CLAMP,
    );
    return {
      opacity: opacityAnim,
    };
  });

  return (
    <View style={[styles.imageContainer, {width: width, height: height}]}>
      <Animated.Image
        source={image.image}
        style={[styles.image, animatedStyle]}
      />
    </View>
  );
};

export default CustomCarouselRender;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 40,
    paddingHorizontal: 30,
  },
  image: {
    width: null,
    flex: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    height: 30,
    resizeMode: 'contain', // 画像を拡大縮小してコンテナに合わせる
  },
});