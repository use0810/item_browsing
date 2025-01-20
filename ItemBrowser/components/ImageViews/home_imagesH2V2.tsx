import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import HomeImagesH2V2Data, { DataType } from '../../data/home_imagesH2V2_data';
import { router } from 'expo-router';

const HomeImagesH2V2 = () => {
  const imageData: DataType[] = HomeImagesH2V2Data;

  const handlePress = (item: DataType) => {
    // 詳細ページにデータを渡して遷移
    router.push({
      pathname: '/search_detail',
      params: {
        data: JSON.stringify(item),
      },
    });
  };
  return (
    <View style={styles.imageGrid}>
      {imageData.map((image) => (
        <TouchableOpacity key={image.name} style={styles.imageContainer}  onPress={() => handlePress(image)}>
          <Image source={image.image} style={styles.image} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginBottom: 30,
  },
  imageContainer: {
    width: '50%', // 2つ並ぶための幅設定
    height: 150, // 高さ設定
    padding: 2,

  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
});

export default HomeImagesH2V2;
