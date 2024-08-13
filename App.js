import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import BookSwipe from './components/swipe/BookSwipe.jsx'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <BookSwipe />
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
