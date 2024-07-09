import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import BookCard from "./components/BookCard.jsx";

export default function App() {
  return (
    <View style={styles.container}>
      <BookCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
