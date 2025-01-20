import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useFavoriteStore } from '../hooks/use_favorite_store';

interface FavoriteButtonProps {
  itemId: number;
}

const UserFavoriteButton = ({ itemId }: FavoriteButtonProps) => {
  const { favorites, toggleFavorite } = useFavoriteStore();

  const isFavorite = favorites.includes(itemId);

  const handlePress = () => {
    toggleFavorite(itemId);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      {isFavorite ? (
        <AntDesign name="star" size={24} color="red" />
      ) : (
        <AntDesign name="staro" size={24} color="red" />
      )}
    </TouchableOpacity>
  );
};

export default UserFavoriteButton;
