import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AllData , { DataType }from '../data/all_data';
import { router } from 'expo-router';
import UserFavoriteButtonWrapper from '../components/userDataManager/userFavoriteWrapper';

const categories = ['オードパルファム', 'パルファム', 'オードトワレ', 'オーデコロン'];

const SearchWindow = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredData, setFilteredData] = useState(AllData);

  const handleSearch = (keyword: string, category: string) => {
    setSearchKeyword(keyword);
    setSelectedCategory(category);

    const results = AllData.filter(item => {
      const matchesKeyword = item.tags.some(tag => tag.includes(keyword));
      const matchesCategory = category ? item.category === category : true;
      return matchesKeyword && matchesCategory;
    });

    setFilteredData(results);
  };

  // アイテムをタップしたときの処理
  const handlePress = (item: DataType) => {
    router.push({
      pathname: '/search_detail', // 遷移先のパス
      params: {
        data: JSON.stringify(item), // オブジェクトを文字列に変換して渡す
      },
    });
  };

  return (
    <View style={styles.container}>
      {/* 検索ボックス */}
      <TextInput
        style={styles.input}
        placeholder="キーワード検索..."
        value={searchKeyword}
        onChangeText={text => handleSearch(text, selectedCategory)}
      />

      {/* カテゴリーボタン */}
      <View style={styles.buttonContainer}>
        {categories.map(category => (
          <TouchableOpacity
            key={category}
            style={[styles.button, selectedCategory === category && styles.selectedButton]}
            onPress={() => handleSearch(searchKeyword, category)}
          >
            <Text style={[styles.buttonText, selectedCategory === category && styles.selectedButtonText]}>
        {category}
      </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* 検索結果リスト */}
      <FlatList
        data={filteredData}
        keyExtractor={item => item.id.toString()}
      
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handlePress(item)}>
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDesc}>{item.desc}</Text>
                <View style={styles.favoriteButton}>
                  <UserFavoriteButtonWrapper itemId={item.id} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  input: {
    borderWidth: 1,
    padding: 8,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    width: '100%'
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  selectedButton: {
    backgroundColor: 'hotpink',
  },
  buttonText: {
    color: '#333',
  },
  selectedButtonText: {
    color: 'white'
  },
  itemContainer: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    flexDirection: "row",
  },
  image: {
    height: 200,
    width: '30%',
    margin: 10
    
  },
  textContainer: {
    width: '70%',
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemDesc: {
    color: '#555',
  },
  favoriteButton: {
    marginRight: 60, // 余白を追加
    alignSelf: 'flex-end', // 右寄せ
  },
});

export default SearchWindow;
