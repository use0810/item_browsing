import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DataType } from "../../data/all_data";
import { useRouter } from "expo-router";

type Props = {
  data1: DataType;
  data2: DataType;
  text1: string;
  text2: string;
};

const SearchImageCategoryH2 = ({ data1, data2, text1, text2 }: Props) => {
  const router = useRouter();

  const handlePress = (text: string) => {
    router.push({
      pathname: "search/search_result",
      params: { name: text, category: text },
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => handlePress(text1)}
        style={[styles.imageContainer, { marginRight: 10 }]}
      >
        {data1?.image ? (
          <Image source={data1.image} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>No Image</Text>
        )}
        <Text style={[styles.text, { left: 10 }]}>{text1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handlePress(text2)}
        style={styles.imageContainer}
      >
        {data2?.image ? (
          <Image source={data2.image} style={styles.image} />
        ) : (
          <Text style={styles.placeholderText}>No Image</Text>
        )}
        <Text style={[styles.text, { right: 10 }]}>{text2}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchImageCategoryH2;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderTopWidth: 0.5,
    borderTopColor: "black",
    backgroundColor: "#f9f9f9", // 背景色を追加
  },
  text: {
    position: "absolute",
    bottom: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "black",
  },
  placeholderText: {
    fontSize: 12,
    color: "#aaa",
    textAlign: "center",
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 150,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#D9D9D9",
  },
});
