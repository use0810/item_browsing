import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DataType } from "../../data/all_data";

type Props = {
  data: DataType;
};

const FavoriteImage = ({ data }: Props) => {

  const router = useRouter();
  const handlePress = (text:string) => {
    router.push({ pathname: "search/search_result", params: { name: text} });
    router.setParams({ category: text });
  };
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={data.image} style={styles.image} resizeMode='contain'/>
      <View style={styles.textContainer}>
        <Text> {data.name}</Text>
        <Text> {data.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image:{
    height: 200,
    width: 200
  },
  textContainer: {
    flex:1,
    height: 200,
    paddingVertical: 30,
  }
})