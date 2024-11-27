
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CustomHeader = () => (
  <View style={styles.container}>
    <Image style={styles.titleImage} source={require('../assets/images/title.png')} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 130,
    paddingTop: 40,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECECEC',
  },
  titleImage: {
    width: "100%",
    height: "100%",
    resizeMode: 'contain',
  },
});

export default CustomHeader;
