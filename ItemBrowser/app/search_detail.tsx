import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import UserCartButton from '../components/user_cart_button';
import UserFavoriteButton from '../components/user_favorite_button';

const SearchDetail = () => {
  const { data } = useLocalSearchParams<{ data: string }>();
  const parsedData = JSON.parse(data); // パラメータをオブジェクトに変換

  const firstLetter = parsedData.name.charAt(0);
  const restOfText = parsedData.name.slice(1);

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    } else {
      Alert.alert('エラー', '一度にカートに入る個数は10個までです。');
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const subtotal = parsedData.price * quantity;

  return (
    <>
      <Stack.Screen options={{ title: parsedData.name }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          {/* 1行目: タイトル */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{parsedData.name}</Text>
          </View>

          <View style={styles.separator} />

          {/* 2行目: 画像 */}
          <View style={styles.imageContainer}>
            <Image source={parsedData.image} style={styles.image} />
          </View>

          <View style={styles.sellContainer}>
            {/* 3行目: "価格" */}
            <Text style={styles.labelText}>Price</Text>
            <View style={styles.priceAndQuantity}>
              <Text style={styles.priceText}>
                ¥{Number(parsedData.price).toLocaleString()}
              </Text>
              <View style={styles.quantityBox}>
                <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.subtotalText}>小計 ¥{subtotal.toLocaleString()}</Text>

            <View style={styles.buttonContainer}>
              <UserCartButton itemId={parsedData.id} quantity={quantity} />
              <View style={styles.favoriteButtonContainer}>
                <UserFavoriteButton itemId={parsedData.id} />
              </View>
            </View>
          </View>

          <View style={styles.separator} />

          <View style={styles.textContainer}>
            <Text style={styles.textFirst}>{firstLetter}</Text>
            <View style={styles.textRestContainer}>
              <Text style={styles.textTitle}>{restOfText}</Text>
              <Text style={styles.text}>{parsedData.desc}</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // スクロール可能な内容を全体に広げる
    paddingBottom: 20, // 下部の余白を追加
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  sellContainer: {
    margin: 20,
  },
  labelText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  priceAndQuantity: {
    flexDirection: 'row',
  },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 8,
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 10,
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  quantityButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
  },
  quantityButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 16,
    paddingHorizontal: 20,
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 30,
  },
  favoriteButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  textContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
  },
  textFirst: {
    fontSize: 80,
    marginRight: 10,
  },
  textRestContainer: {
    flex: 1,
  },
  textTitle: {
    fontSize: 25,
  },
  text: {},
});

export default SearchDetail;
