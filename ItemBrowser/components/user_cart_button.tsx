import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, Text, View, StyleSheet, Button, Modal } from 'react-native';
import { useCartStore } from '../hooks/use_cart_store';
import { router } from 'expo-router';

interface CartButtonProps {
  itemId: number;
  quantity: number;
}

const UserCartButton = ({ itemId, quantity }: CartButtonProps) => {
  const { addToCart } = useCartStore();
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    addToCart(itemId, quantity);
    setModalVisible(true);
  };

  const handleNavigateToCart = () => {
    setModalVisible(false);
    router.push('/(tabs)/cart');
  };

  return (
    <>
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>カートに入れる</Text>
        <AntDesign name="shoppingcart" size={24} color="gray" />
      </View>
    </TouchableOpacity>

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>カートに{quantity}個のアイテムが追加されました</Text>
          <Text style={styles.modalText}>カート一覧に移動しますか？</Text>
          <View style={styles.modalButtons}>
            <View style={styles.modalButtonWrapper}>
              <Button title="はい" onPress={handleNavigateToCart} color="green" />
            </View>
            <View style={styles.modalButtonWrapper}>
              <Button title="いいえ" onPress={() => setModalVisible(false)} color="gray" />
            </View>
          </View>
        </View>
      </View>
    </Modal>
</>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    marginRight: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  modalButtonWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  }
});

export default UserCartButton;
