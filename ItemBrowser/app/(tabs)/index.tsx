import { Ionicons } from '@expo/vector-icons';

import CustomCarousel from '../../components/carousel/custom_carousel';
import HomeImagesH2V2 from '../../components/ImageViews/home_imagesH2V2';

import HomeCarouselData, { DataType } from '../../data/home_carousel_data';
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';


export default function HomeTab1() {
  const CarouselData: DataType[] = HomeCarouselData;

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.inputContainer} onPress={() => router.push('../search_window')}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <View style={styles.input}>
          <Text>すべての商品から探す</Text>
        </View>
      </TouchableOpacity>
      {/* <Text style={[styles.text, { fontFamily: 'jsMathCmbx10' }]}> */}
      <Text style={styles.text}>
          New
      </Text>
      <CustomCarousel data={CarouselData}/>
       {/* <Text style={[styles.text, { fontFamily: 'jsMathCmbx10' }]}> */}
       <Text style={styles.text}>
          Season
      </Text>
      <HomeImagesH2V2 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 8,
    marginHorizontal: 30,
    marginTop: 30,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 50
  }
});
