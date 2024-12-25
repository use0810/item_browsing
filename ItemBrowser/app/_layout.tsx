import { Stack } from 'expo-router';
import UserDataProvider from '../components/userDataManager/providers/userDataProvider';

export default function RootLayout() {
  return (
    <UserDataProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="search_window"
          options={{ title: '検索画面' }}
        />
        <Stack.Screen name="search_detail" />
        
      </Stack>
    </UserDataProvider>
  );
}