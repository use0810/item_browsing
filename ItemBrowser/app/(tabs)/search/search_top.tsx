import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import SearchImageCategoryBig from '../../../components/ImageViews/search_imageCategoryBig';
import SearchImageCategoryH2 from '../../../components/ImageViews/search_imageCategoryH2';
import SearchWindow from '../../search_window';
import AllData from '../../../data/all_data';
import { router } from 'expo-router';

export default function SearchTop() {

  const selectedItems = ['Pors Nuel', 'Eduard Classic', 'Sif Prains', 'Soln Rose'];
  const filteredData = AllData.filter(item => selectedItems.includes(item.name));

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.inputContainer} onPress={() => router.push('/search_window')}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <View style={styles.input}>
          <Text>すべての商品から探す</Text>
        </View>
      </TouchableOpacity>
        <SearchImageCategoryBig data={filteredData[0]} text="オードパルファム" />
        <SearchImageCategoryBig data={filteredData[1]} text="オードトワレ" />
        <SearchImageCategoryH2 data1={filteredData[2]} data2={filteredData[3]} text1="オーデコロン" text2="パルファム"/>
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
    marginVertical: 30,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
