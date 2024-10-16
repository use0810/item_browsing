import { StyleSheet, TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function HomeTab1() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Ionicons name="search" size={24} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="検索内容を入力"
          // ここにonChangeTextやその他のプロパティを追加
        />
      </View>
    </View>
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
    margin: 8
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
