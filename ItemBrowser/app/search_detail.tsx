import { Stack, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import UserFavoriteButtonWrapper from '../components/userDataManager/userFavoriteWrapper';

const SearchDetail = () => {
  const { data } = useLocalSearchParams<{ data: string }>();
  const parsedData = JSON.parse(data); // パラメータをオブジェクトに変換

  const firstLetter = parsedData.name.charAt(0);
  const restOfText = parsedData.name.slice(1);

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const subtotal = parsedData.price * quantity;

  return (
    <>
      <Stack.Screen options={{ title: parsedData.name }} />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageAndPriceContainer}>
          <Image source={parsedData.image} style={styles.image} />
          <View style={styles.rightContainer}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{parsedData.name}</Text>
              <Text style={styles.volume}>30ml</Text>
            </View>
            <View style={styles.separator} />
            <Text>価格</Text>
            <View style={styles.quantityContainer}>
              <Text style={styles.priceText}>¥{Number(parsedData.price).toLocaleString()}</Text>
              <View style={styles.quantityBox}>
                <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
                  <Text style={styles.quantityButtonText}>-</Text>
                </TouchableOpacity>
                <TextInput
                  style={styles.quantityInput}
                  value={String(quantity)}
                  onChangeText={(text) => setQuantity(Number(text) || 1)}
                  keyboardType="numeric"
                />
                <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
                  <Text style={styles.quantityButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.subtotalText}>小計 ¥{subtotal.toLocaleString()}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.purchaseButton}>
                <Text style={styles.purchaseButtonText}>購入</Text>
              </TouchableOpacity>
              <View style={styles.favoriteButtonContainer}>
                <UserFavoriteButtonWrapper itemId={parsedData.id} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textFirst}>{firstLetter}</Text>
          <View style={styles.textRestContainer}>
            <Text style={styles.textTitle}>{restOfText}</Text>
            <Text style={styles.text}>{parsedData.desc}</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imageAndPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: '40%',
    height: 300,
    resizeMode: 'contain',
  },
  rightContainer: {
    width: '40%',
    justifyContent: 'flex-start',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  name: {
    fontSize: 30,
  },
  volume: {
    fontSize: 12,
    color: '#666',
    marginLeft: 5,
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
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
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
  quantityInput: {
    width: 40,
    textAlign: 'center',
    fontSize: 16,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  subtotalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  purchaseButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#ff5733',
    alignItems: 'center',
    borderRadius: 5,
  },
  purchaseButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  favoriteButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  textContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
  },
  textFirst: {
    fontSize: 80,
    marginRight: 10
  },
  textRestContainer:{
    flex:1
  },
  textTitle: {
    fontSize: 25,
  },
  text: {
  }
});

export default SearchDetail;
