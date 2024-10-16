import {
  StyleSheet,
  Platform,
  Text,
  View,
  StatusBar,
  SafeAreaView,
} from "react-native";

export default function CustomHeader() {

  return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});