import { Ionicons } from '@expo/vector-icons';

import CustomCarousel from '../../components/carousel/custom_carousel';
import HomeImagesH2V2 from '../../components/ImageViews/home_imagesH2V2';
import { ScrollView, Text, TextInput, View, StyleSheet } from 'react-native';


export default function HomeTab1() {
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="すべての商品から探す"
        />
      </View>
      {/* <Text style={[styles.text, { fontFamily: 'jsMathCmbx10' }]}> */}
      <Text style={styles.text}>
          New
      </Text>
      <CustomCarousel />
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
