import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadUserData, updateUserData } from '../userDataStructure';

interface CartContextType {
  carts: number[];
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const UserCartProvider = ({ children }: { children: React.ReactNode }) => {
  const [carts, setCarts] = useState<number[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUserData = await loadUserData();
      setCarts(currentUserData?.carts || []);
    };

    fetchUserData();
  }, []);

  const addToCart = (itemId: number) => {
    setCarts(prevCarts => {
      const newCarts = [...prevCarts, itemId];
      updateUserData({ carts: newCarts });
      return newCarts;
    });
  };

  const removeFromCart = (itemId: number) => {
    setCarts(prevCarts => {
      const newCarts = prevCarts.filter(id => id !== itemId);
      updateUserData({ carts: newCarts });
      return newCarts;
    });
  };

  return (
    <CartContext.Provider value={{ carts, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCarts = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('カートデータを取得できませんでした。');
  }
  return context;
};
