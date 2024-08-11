import { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import BookCard from './components/BookCard.jsx'
import useSwipe from './hooks/useSwipe.js'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import useBooks from './hooks/useBooks.js'
import { runOnUI } from 'react-native-reanimated'
import SwipeButtons from './components/SwipeButtons.jsx'

export default function App() {
  const [books] = useBooks()
  const [curIdx, setCurIdx] = useState(0)

  const [firstIdx, setFirstIdx] = useState(0)
  const [secondIdx, setSecondIdx] = useState(1)
  const [thirdIdx, setThirdIdx] = useState(2)

  const remainder = curIdx % 3
  const secondCardActive = curIdx === 1 || remainder === 1
  const thirdCardActive = curIdx === 2 || remainder === 2

  const firstBook = books[firstIdx]
  const secondBook = books[secondIdx]
  const thirdBook = books[thirdIdx]

  const onSwipeLeft = () => {
    console.log('left')
    setCurIdx(prevIdx => prevIdx + 1)
  }
  const onSwipeRight = () => {
    console.log('right')
    setCurIdx(prevIdx => prevIdx + 1)
  }

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

  const [curSwipe, setCurSwipe] = useState(swipeA)

  useEffect(() => {
    console.log(curIdx)

    if (curIdx === 0) {
      swipeA.enable()
      swipeB.disable()
      swipeC.disable()
      runOnUI(() => {
        'worklet'
        swipeA.animation.zIndex.value = 3
        swipeB.animation.zIndex.value = 2
        swipeC.animation.zIndex.value = 1
      })()
    }

    if (curIdx !== 0 && remainder === 0) {
      swipeA.enableWithCooldown()
      swipeB.disable()
      runOnUI(() => {
        'worklet'
        swipeA.animation.zIndex.value = 3
        swipeB.animation.zIndex.value = 2
        swipeC.animation.zIndex.value = 1
        swipeB.animation.reset()
      })()
      setThirdIdx(thirdIdx + 3)

      setCurSwipe(swipeA)
    }

    if (secondCardActive) {
      swipeB.enableWithCooldown()
      swipeC.disable()
      runOnUI(() => {
        'worklet'
        swipeA.animation.zIndex.value = 1
        swipeB.animation.zIndex.value = 3
        swipeC.animation.zIndex.value = 2
        swipeC.animation.reset()
      })()
      setFirstIdx(firstIdx + 3)

      setCurSwipe(swipeB)
    }

    if (thirdCardActive) {
      swipeC.enableWithCooldown()
      swipeA.disable()
      runOnUI(() => {
        'worklet'
        swipeA.animation.zIndex.value = 2
        swipeB.animation.zIndex.value = 1
        swipeC.animation.zIndex.value = 3
        swipeA.animation.reset()
      })()
      setSecondIdx(secondIdx + 3)

      setCurSwipe(swipeC)
    }
  }, [curIdx])

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
      <SwipeButtons
        swipeLeft={curSwipe.swipeLeft}
        swipeRight={curSwipe.swipeRight}
      />
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
