import React, { createContext, useContext, useEffect, useState } from 'react';
import { loadUserData, updateUserData } from '../userDataStructure';

interface FavoriteContextType {
  favorites: number[];
  toggleFavorite: (itemId: number) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const UserFavoriteProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUserData = await loadUserData();
      setFavorites(currentUserData?.favorites || []);
    };
    fetchUserData();
  }, []);

  const toggleFavorite = async (itemId: number) => {
    // 現在（変更前）のお気に入りリストと渡されたIdを比較して
    // 含まれていたら省き、なければ追加する処理
    setFavorites(prevFavorites => {
      const newFavorites = prevFavorites.includes(itemId)
        ? prevFavorites.filter(id => id !== itemId)
        : [...prevFavorites, itemId];

      // database側の情報を更新
      updateUserData({ favorites: newFavorites });
      return newFavorites;
    });
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const userFavorites = () => {
  const context = useContext(FavoriteContext);
  if (!context) {
    throw new Error('お気に入りデータを取得できませんでした。');
  }
  return context;
};
