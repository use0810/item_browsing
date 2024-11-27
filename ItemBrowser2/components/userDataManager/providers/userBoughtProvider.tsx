import React, { createContext, useContext, useState, useEffect } from 'react';
import { loadUserData, updateUserData } from '../userDataStructure';

interface BoughtContextType {
  boughts: number[];
  markAsBought: (itemId: number) => void;
}

const BoughtContext = createContext<BoughtContextType | undefined>(undefined);

export const UserBoughtProvider = ({ children }: { children: React.ReactNode }) => {
  const [boughts, setBoughts] = useState<number[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const currentUserData = await loadUserData();
      setBoughts(currentUserData?.boughts || []);
    };

    fetchUserData();
  }, []);

  const markAsBought = (itemId: number) => {
    setBoughts(prevBoughts => {
      const newBoughts = [...prevBoughts, itemId];
      updateUserData({ boughts: newBoughts });
      return newBoughts;
    });
  };

  return (
    <BoughtContext.Provider value={{ boughts, markAsBought }}>
      {children}
    </BoughtContext.Provider>
  );
};

export const useBoughts = () => {
  const context = useContext(BoughtContext);
  if (!context) {
    throw new Error('購入済みデータを取得できませんでした。');
  }
  return context;
};
