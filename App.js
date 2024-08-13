import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import BookList from './components/swipe/BookList.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <BookList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
