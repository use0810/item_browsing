import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import {  useRouter } from 'expo-router';

import { DataType } from "../../data/all_data";

type Props = {
  data: DataType
  text: string
};

const SearchImageCategoryBig = ({ data , text}: Props) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({ pathname: "search/search_result", params: { name: text} });
    router.setParams({ category: text });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container} >
      <Text style={styles.text}>{text}</Text>
      <View style={styles.imageContainer}>
        <Image source={data.image} style={styles.image}/>
      </View>
    </TouchableOpacity>
  );
};

export default SearchImageCategoryBig

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderTopWidth: .5,
    borderTopColor: 'black',
  },
  text: {
    flex: 3,
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: 150, // 高さ設定
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: '#D9D9D9',
  },
});