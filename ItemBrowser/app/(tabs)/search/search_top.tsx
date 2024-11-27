import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import SearchImageCategoryBig  from '../../../components/ImageViews/search_imageCategoryBig';
import SearchImageCategoryH2  from '../../../components/ImageViews/search_imageCategoryH2';
import AllData from '../../../data/all_data';

export default function SearchTop() {

  const selectedItems = ['Item1', 'Item3', 'Item5', 'Item7'];
  const filteredData = AllData.filter(item => selectedItems.includes(item.name));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="すべての商品から探す"
          // ここにonChangeTextやその他のプロパティを追加
        />
      </View>
        <SearchImageCategoryBig data={filteredData[0]} text="Category1" />
        <SearchImageCategoryBig data={filteredData[1]} text="Category2" />
        <SearchImageCategoryH2 data1={filteredData[2]} data2={filteredData[3]} text1="Category3" text2="Category4"/>
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
