import { Tabs } from 'expo-router';

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarLabelPosition: 'below-icon',
        headerShown: false
      }}
    >
      <Tabs.Screen name="index"
        options={{
          title: 'ホーム',
          // headerShown: true,
          tabBarIcon: ({ color, focused }) => (
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
          tabBarIcon: ({ color, focused }) => (
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
          tabBarIcon: ({ color, focused }) => (
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
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'cart-sharp' : 'cart-outline'} 
              color={color} 
              size={24}
            />
          ),
        }} 
      />
      <Tabs.Screen
        name="mypage/user" 
        options={{ 
          title: 'マイページ',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome 
              name={focused ? 'user' : 'user-o'} 
              color={color} 
              size={24}
            />
          ),
        }} 
      />
      <Tabs.Screen
        name="mypage/history" 
        options={{ 
          title: 'マイページ', href: null 
        }} 
      />
    </Tabs>
  );
}