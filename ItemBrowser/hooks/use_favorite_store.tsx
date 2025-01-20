import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// お気に入りの状態管理ストア
interface FavoriteState {
  favorites: number[];
  toggleFavorite: (itemId: number) => void;
}

// Zustandストアの作成
export const useFavoriteStore = create<FavoriteState>()(  
  persist<FavoriteState>(                               
    (set, get) => ({
      favorites: [],
      toggleFavorite: (itemId: number) => {
        const favorites = get().favorites; 
        const newFavorites = favorites.includes(itemId)
          ? favorites.filter(id => id !== itemId)
          : [...favorites, itemId];
        set({ favorites: newFavorites });
      },
    }),
    {
      name: 'favorite-storage', // ローカルストレージに保存
    }
  )
);
