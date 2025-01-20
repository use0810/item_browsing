import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import UserFavoriteButton from '../../components/user_favorite_button';
import AllData, { DataType } from '../../data/all_data';
import { useFavoriteStore } from '../../hooks/use_favorite_store';

// Favorite メインコンポーネント
const Favorite = () => {
  const router = useRouter();

  // Zustandストアからお気に入りデータを取得
  const favorites: number[] = useFavoriteStore(state => state.favorites);

  // お気に入りIDでデータをフィルタリング
  const filteredData = AllData.filter(item => favorites.includes(item.id));

  const handlePress = (item: DataType) => {
    router.push(`/search_detail?data=${encodeURIComponent(JSON.stringify(item))}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filteredData.map((item: DataType) => (
        <View key={item.id} style={styles.item}>
          <TouchableOpacity style={styles.imageContainer} onPress={() => handlePress(item)}>
            <Image source={item.image} style={styles.image} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.textContainer} onPress={() => handlePress(item)}>
            <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">{item.name}</Text>
            <Text style={styles.descText} numberOfLines={3} ellipsizeMode="tail">{item.desc}</Text>
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <UserFavoriteButton itemId={item.id} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    flexGrow: 1,
  },
  item: {
    width: '48%',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1.5, // 動的な高さ調整
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  descText: {
    fontSize: 14,
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 10, // 高さではなくパディングで調整
  },
});
