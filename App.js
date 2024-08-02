import { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import BookCard from './components/BookCard.jsx'
import useSwipe from './hooks/useSwipe.js'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

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
      console.log(data.books[0])
    } catch (error) {
      console.log(error)
      return <Text>Ha ocurrido un error</Text>
    }
  }

  const onSwipeLeft = () => console.log('left')
  const onSwipeRight = () => console.log('right')

  const swipeA = useSwipe({
    onSwipeLeft,
    onSwipeRight
  })

  const swipeB = useSwipe({
    onSwipeLeft,
    onSwipeRight
  })

  const swipeC = useSwipe({
    onSwipeLeft,
    onSwipeRight
  })

  const [firstBook, secondBook, thirdBook, ...queue] = books

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <GestureHandlerRootView
        style={{
          flex: 1,
          backgroundColor: 'lightblue',
          alignSelf: 'stretch'
        }}
      >
        {firstBook && (
          <BookCard
            book={firstBook}
            panGesture={swipeA.panGesture}
            animatedStyles={swipeA.animatedStyles}
          />
        )}
        {secondBook && (
          <BookCard
            book={secondBook}
            panGesture={swipeB.panGesture}
            animatedStyles={swipeB.animatedStyles}
          />
        )}
        {thirdBook && (
          <BookCard
            book={thirdBook}
            panGesture={swipeC.panGesture}
            animatedStyles={swipeC.animatedStyles}
          />
        )}
      </GestureHandlerRootView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignSelf: 'stretch',
          marginBottom: 30
        }}
      >
        <Pressable onPress={swipeA.swipeLeft}>
          <Text>{':('}</Text>
        </Pressable>
        <Pressable onPress={swipeA.swipeRight}>
          <Text>{'3'}</Text>
        </Pressable>
      </View>
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
