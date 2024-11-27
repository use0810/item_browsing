import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import { DataType } from "../../data/all_data";

type Props = {
  data: DataType;
  text: string;
};

const SearchImageCategoryBig = ({ data, text }: Props) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "search/search_result",
      params: { name: text, category: text }, // パラメータを一括で送信
    });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.imageContainer}>
        {data.image ? (
          <Image source={data.image} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>No Image Available</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SearchImageCategoryBig;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 0.5,
    borderTopColor: "black",
    backgroundColor: "#f9f9f9",
  },
  text: {
    flex: 3,
    fontSize: 16,
    marginRight: 10,
    fontWeight: "bold",
    color: "#333", // 色を調整
  },
  imageContainer: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
    height: 120, // 高さを少し小さく
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
  },
  placeholderText: {
    fontSize: 14,
    color: "#aaa",
  },
});
