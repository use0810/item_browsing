import { AntDesign } from '@expo/vector-icons';
import { View } from 'react-native';

interface FavoriteButtonProps {
  isFavorite: boolean; // trueまたはfalseを受け取る
}

const UserFavoriteButton = ({ isFavorite }: FavoriteButtonProps) => {
  return (
    <View>
      {isFavorite ? (
        <AntDesign name="star" size={24} color="red" />
      ) : (
        <AntDesign name="staro" size={24} color="red" />
      )}
    </View>
  );
};

export default UserFavoriteButton;
