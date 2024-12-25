import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DataType } from "../../data/all_data";
import { LinearGradient } from 'expo-linear-gradient';

type Props = {
  data: DataType;
};

const FavoriteImage = ({ data }: Props) => {

  const router = useRouter();

  const handlePress = (item: DataType) => {
    // detail.tsx にデータを渡して遷移
    router.push({
      pathname: '/search_detail', // detail.tsx のパス
      params: {
        data: JSON.stringify(item), // オブジェクトを文字列に変換
      },
    });
  };
  
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={data.image} style={styles.image} resizeMode='contain'/>
      <View style={styles.textContainer}>
        <Text> {data.name}</Text>
        <Text style={{ maxHeight: 200 }} ellipsizeMode="tail"> {data.desc}</Text>
        <LinearGradient
        colors={['transparent', 'white']} // グラデーションの色（テキスト背景色に合わせる）
        style={styles.gradient}
      />
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
    width: '100%',
  },
  textContainer: {
    flex:1,
    height: 200,
    paddingBottom: 30,
  },
  gradient: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100, // グラデーションの高さ
  },
})