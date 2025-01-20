import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// アイテム型定義
interface CartItem {
  id: number;
  quantity: number;
}

// カートの状態管理ストア
interface CartState {
  carts: CartItem[];
  addToCart: (itemId: number, quantity: number) => void;
  removeFromCart: (itemId: number, quantity: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void; // 数量を強制的に指定
}

// Zustandストアの作成
export const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get) => ({
      carts: [],
      addToCart: (itemId: number, quantity: number) => {
        const currentCarts = get().carts;
        const existingItem = currentCarts.find(item => item.id === itemId);

        let newCarts;
        if (existingItem) {
          // 既存アイテムの数量を増やす
          newCarts = currentCarts.map(item =>
            item.id === itemId
              ? { ...item, quantity: item.quantity + quantity }
              : item
          );
        } else {
          // 新規アイテムを追加
          newCarts = [...currentCarts, { id: itemId, quantity }];
        }

        set({ carts: newCarts });
      },
      removeFromCart: (itemId: number, quantity: number) => {
        const currentCarts = get().carts;
        const existingItem = currentCarts.find(item => item.id === itemId);

        let newCarts;
        if (existingItem) {
          const updatedQuantity = existingItem.quantity - quantity;

          if (updatedQuantity > 0) {
            // 数量を更新
            newCarts = currentCarts.map(item =>
              item.id === itemId ? { ...item, quantity: updatedQuantity } : item
            );
          } else {
            // 数量が0以下ならアイテムを削除
            newCarts = currentCarts.filter(item => item.id !== itemId);
          }
        } else {
          // アイテムが存在しない場合は何もしない
          newCarts = currentCarts;
        }

        set({ carts: newCarts });
      },
      updateQuantity: (itemId: number, quantity: number) => {
        const currentCarts = get().carts;
        const existingItem = currentCarts.find(item => item.id === itemId);

        let newCarts;
        if (existingItem) {
          // 既存アイテムの数量を強制的に指定
          newCarts = currentCarts.map(item =>
            item.id === itemId ? { ...item, quantity } : item
          );
        } else {
          // 新規アイテムを追加
          newCarts = [...currentCarts, { id: itemId, quantity }];
        }
        

        set({ carts: newCarts });
      },
    }),
    {
      name: 'cart-storage', // ローカルストレージに保存
    }
  )
);
