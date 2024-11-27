import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export interface UserDataType {
  id: number; // ユーザーのID
  favorites: number[]; // お気に入りのアイテムID
  carts: number[]; // カートに入れたアイテムID
  boughts: number[]; // 購入したアイテムID
}

const initialUserData: UserDataType = {
  id: 1, // ユーザーID
  favorites: [], // 初期値は空
  carts: [], // 初期値は空
  boughts: [], // 初期値は空
};

const USER_DATA_KEY = '@user_data';

// ユーザーデータを保存する関数
export const saveUserData = async (userData: UserDataType) => {
  try {
    const jsonValue = JSON.stringify(userData);
    await AsyncStorage.setItem(USER_DATA_KEY, jsonValue);
  } catch (e) {
    console.error('登録エラーが発生しました。:', e);
  }
};

// ユーザーデータを読み込む関数
export const loadUserData = async (): Promise<UserDataType | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(USER_DATA_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : initialUserData;
  } catch (e) {
    console.error('読込エラーが発生しました。', e);
    return null;
  }
};

// ユーザーデータを更新する関数
// partialとはどれか一つまたは複数を含めることができ、指定しなかったプロパティは省略可能
export const updateUserData = async (updates: Partial<UserDataType>) => {
  const currentUserData = await loadUserData();
  if (currentUserData) {
    const updatedUserData = { ...currentUserData, ...updates };
    await saveUserData(updatedUserData);
  }
};
