import { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import BookCard from './components/BookCard.jsx'
import SwipeDetector from './components/SwipeDetector.jsx'
import useSwipe from './hooks/useSwipe.js'

export default function App() {
  const [books, setBooks] = useState([])
  const { panGesture, animatedStyles, swipeRight, swipeLeft } = useSwipe({
    onSwipeLeft: () => console.log('left'),
    onSwipeRight: () => console.log('right')
  })

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
      <SwipeDetector panGesture={panGesture} animatedStyles={animatedStyles}>
        <BookCard />
      </SwipeDetector>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignSelf: 'stretch',
          marginBottom: 30
        }}
      >
        <Pressable onPress={swipeLeft}>
          <Text>{':('}</Text>
        </Pressable>
        <Pressable onPress={swipeRight}>
          <Text>{'<3'}</Text>
        </Pressable>
      </View>
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
