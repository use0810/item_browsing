import React from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useCartStore } from '../../hooks/use_cart_store';
import { router } from 'expo-router';
import AllData from '../../data/all_data';

const Cart = () => {
  const { carts, removeFromCart, updateQuantity } = useCartStore();

  // データからアイテム情報を取得
  const getItemDetails = (id) => AllData.find((data) => data.id === id);

  const handleNavigateToDetails = (item) => {
    router.push({
      pathname: '/search_detail',
      params: { data: JSON.stringify(item) },
    });
  };

  // 合計金額を計算
  const totalAmount = carts.reduce((total, item) => {
    const itemDetails = getItemDetails(item.id);
    return total + (itemDetails ? itemDetails.price * item.quantity : 0);
  }, 0);

  return (
    <View style={styles.container}>
      <FlatList
        data={carts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const itemDetails = getItemDetails(item.id);
          if (!itemDetails) return null; // データが存在しない場合はスキップ

          const subtotal = itemDetails.price * item.quantity; // 小計計算

          const handleIncrease = () => {
            const newQuantity = item.quantity + 1;
            updateQuantity(item.id, newQuantity);
          };

          const handleDecrease = () => {
            const newQuantity = item.quantity > 1 ? item.quantity - 1 : 1;
            updateQuantity(item.id, newQuantity);
          };

          return (
            <View style={styles.itemContainer}>
              <TouchableOpacity onPress={() => handleNavigateToDetails(itemDetails)}>
                <Image source={itemDetails.image} style={styles.image} />
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <TouchableOpacity onPress={() => handleNavigateToDetails(itemDetails)}>
                  <Text style={styles.title}>{itemDetails.name}</Text>
                </TouchableOpacity>
                <View style={styles.quantityContainer}>
                  <Text>数量:</Text>
                  <View style={styles.quantityBox}>
                    <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.subtotal}>小計: ¥{subtotal.toLocaleString()}</Text>
              </View>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => removeFromCart(item.id, item.quantity)}
              >
                <Text style={styles.deleteButtonText}>削除</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      {carts.length > 0 && (
        <View style={styles.footer}>
          <Text style={styles.totalAmount}>合計金額: ¥{totalAmount.toLocaleString()}</Text>
          <Button title="購入ページへ" onPress={() => router.push('/purchase')} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantityBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
    marginLeft: 5,
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
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtotal: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'right',
  },
});

export default Cart;
