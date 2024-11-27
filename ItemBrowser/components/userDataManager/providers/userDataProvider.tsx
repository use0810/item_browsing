import React from 'react';
import { UserFavoriteProvider } from './userFavoriteProvider';
import { UserCartProvider } from './userCartProvider';
import { UserBoughtProvider } from './userBoughtProvider';

const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserFavoriteProvider>
      <UserCartProvider>
        <UserBoughtProvider>
          {children}
        </UserBoughtProvider>
      </UserCartProvider>
    </UserFavoriteProvider>
  );
};

export default UserDataProvider;
