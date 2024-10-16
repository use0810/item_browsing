import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 

import CustomHeader from '../../components/custom_header';
import HomeTab1 from '../../components/home_tab1';

export default function Index() {
  const [activeTab, setActiveTab] = useState('Tab1')

  return (
    <View style={styles.container}>
      <CustomHeader />
      {activeTab === 'Tab1' ? <HomeTab1 /> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
