import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, View} from 'react-native';
import { userFavorites } from '../../components/userDataManager/providers/userFavoriteProvider';
import AllData, { DataType } from '../../data/all_data';
import UserFavoriteButtonWrapper from '../../components/userDataManager/userFavoriteWrapper';
import FavoriteImage from '../../components/ImageViews/favarite_image';


const Favorite = () => {
  const { favorites } = userFavorites(); // コンテキストからお気に入りを取得

  const filterDataById = (datas: DataType[], favorites: number[] ) => {
    return datas.filter(item => favorites.includes(item.id));
  };

  // フィルタリング結果を取得
  const filteredData = filterDataById(AllData, favorites);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {filteredData.map((item: DataType) => (
        // <TouchableOpacity onPress={handlePress}>
        <View key={item.id} style={styles.item}>
          <FavoriteImage data={item}/>
          <UserFavoriteButtonWrapper
            key={item.id}
            itemId={item.id} 
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default Favorite;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // 横並びにする
    flexWrap: 'wrap', // アイテムが折り返すようにする
    justifyContent: 'space-between', // アイテム間に均等にスペースを確保
    padding: 10,
    borderBottomWidth: 1,
  },
  item: {
      width: '48%', // 2つ横並びにするために幅を50%未満に設定
      marginBottom: 10, // 縦のスペースを確保
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 10,
      alignItems: 'center', // アイテム内のコンテンツを中央に配置
  },
  image_text: {

  },
  favorite: {

  }

});
