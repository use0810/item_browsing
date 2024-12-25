import { Tabs} from 'expo-router';
import { Image, View, StyleSheet} from 'react-native';

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import CustomHeader from '../../components/custom_header';


const TabLayout = ( ) => {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: { width: '100%' }
      }}
    >
      <Tabs.Screen 
        name="index"
        options={{
          title: 'ホーム',
          headerTitleAlign: 'center',
          header: () => <CustomHeader />, 
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons 
              name={focused ? 'home-sharp' : 'home-outline'} 
              color={color} 
              size={24}
            />
          ),
        }} 
      />
      <Tabs.Screen
        name="search"
        options={{ 
          title: '検索',
          headerTitleAlign: 'center',
          headerShown: false,
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons 
              name={focused ? 'search-circle-sharp' : 'search-circle-outline'} 
              color={color} 
              size={30}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorite" 
        options={{ 
          title: 'お気に入り',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <AntDesign 
              name={focused ? 'star' : 'staro'} 
              color={color} 
              size={24}
            />
          ),
        }} 
      />
      <Tabs.Screen
        name="cart" 
        options={{ 
          title: 'カート',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <Ionicons 
              name={focused ? 'cart-sharp' : 'cart-outline'} 
              color={color} 
              size={24}
            />
          ),
        }} 
      />
      <Tabs.Screen
        name="mypage" 
        options={{ 
          title: 'マイページ',
          tabBarIcon: ({ color, focused }: { color: string; focused: boolean }) => (
            <FontAwesome 
              name={focused ? 'user' : 'user-o'} 
              color={color} 
              size={24}
            />
          ),
        }} 
      />
    </Tabs>
  );
}


export default TabLayout;

const styles = StyleSheet.create({
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
