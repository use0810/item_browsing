import { Stack } from 'expo-router';
import { View, Image, StyleSheet} from 'react-native';

import CustomHeader from '../../../components/custom_header';

export default function MypageLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="user"
        options={{
          headerTitleAlign: 'center',
          header: () => <CustomHeader />, // カスタムヘッダーを使用
          // headerStyle: { backgroundColor: '#ECECEC' },
          headerShown: true,
        }}
      />
      <Stack.Screen 
        name="history"
       />
    </Stack>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImageContainer: {
    flex: 1,
    width: 200,
    height: 100,
    paddingTop: 30, 
    paddingBottom: 10,
  },
  titleImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
