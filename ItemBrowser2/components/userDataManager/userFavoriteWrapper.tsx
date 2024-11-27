import React from 'react';
import { TouchableOpacity } from 'react-native';
import { userFavorites } from './providers/userFavoriteProvider';
import UserFavoriteButton from './userFavoriteButton';

interface UserFavoriteButtonWrapperProps {
  itemId: number; // itemIdをプロパティとして定義
}

const UserFavoriteButtonWrapper = ({ itemId }: UserFavoriteButtonWrapperProps) => {
  const { favorites, toggleFavorite } = userFavorites(); // Contextから状態と関数を取得

  const isFavorite = favorites.includes(itemId); // お気に入り状態を取得

  const handleFavoriteToggle = () => {
    toggleFavorite(itemId); // トグル処理を実行
  };

  return (
    <TouchableOpacity onPress={handleFavoriteToggle}>
      <UserFavoriteButton isFavorite={isFavorite} />
    </TouchableOpacity>
  );
};

export default UserFavoriteButtonWrapper;
