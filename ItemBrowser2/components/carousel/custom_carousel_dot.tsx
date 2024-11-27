// custom_carousel_pagination.tsxで呼び出される

import {StyleSheet, View} from 'react-native';
import React from 'react';

type Props = {
  index: number;
  paginationIndex: number;
};

const CustomCarouselDot = ({index, paginationIndex}: Props) => {
  return (
    <View style={paginationIndex === index ? styles.dot : styles.dotOpacity} />
  );
};

export default CustomCarouselDot;

const styles = StyleSheet.create({
  dot: {
    backgroundColor: 'black',
    height: 8,
    width: 8,
    marginHorizontal: 2,
    borderRadius: 8,
  },
  dotOpacity: {
    backgroundColor: 'white',
    height: 7,
    width: 7,
    marginHorizontal: 2,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    opacity: 0.5,
  },
});