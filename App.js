import { useState, useEffect } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import BookCard from './components/BookCard.jsx'

export default function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    try {
      const res = await fetch('https://bookido-back.onrender.com/books')
      const data = await res.json()

      setBooks(data.books)
    } catch (error) {
      console.log(error)
      return <Text>Ha ocurrido un error</Text>
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <BookCard />
      {/* <FlatList
        data={books}
        renderItem={({ item }) => <BookCard item={item} />}
      /> */}
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
