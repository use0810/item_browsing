import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import UserFavoriteButton from '../../../components/user_favorite_button'; // 新しいコンポーネントをインポート
import AllData, { DataType } from '../../../data/all_data';
import React from 'react';

export default function SearchResult() {
  const { category } = useLocalSearchParams<{ category: string }>();

  // カテゴリーでデータをフィルタリング
  const filterDataByCategory = (datas: DataType[], category: string) => {
    return datas.filter(item => item.category === category);
  };

  // フィルタリング結果を取得
  const filteredData = filterDataByCategory(AllData, category);

  // データを2列に分割
  const rows = [];
  for (let i = 0; i < filteredData.length; i += 2) {
    rows.push(filteredData.slice(i, i + 2));
  }

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
    <View style={styles.container}>
      <ScrollView>
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map(item => (
              <View key={item.id} style={styles.contents}>
                <TouchableOpacity onPress={() => handlePress(item)}>
                  <Image source={item.image} style={styles.image} />
                </TouchableOpacity>
                <View style={styles.textContainer}>
                  <Text>{item.name}</Text>
                  <UserFavoriteButton itemId={item.id} />
                </View>
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    borderRadius: 5,
  },
  contents: {
    flex: 1,
    maxWidth: '50%',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
  image: {
    flex: 1,
    height: 200,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
  textContainer: {
    flex: 2,
    flexDirection: 'row', // 横に並べる
    marginVertical: 20,
    justifyContent: 'space-between', // テキストとボタンの間にスペースを分配
  },
});
