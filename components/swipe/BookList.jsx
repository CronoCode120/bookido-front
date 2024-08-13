import { useState, useEffect } from 'react'
import { useBooks } from '../../hooks'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { runOnUI } from 'react-native-reanimated'
import BookCard from './BookCard.jsx'

const BookList = ({ curIdx, swipeInstances, setCurSwipe }) => {
  const page = Math.floor((curIdx + 3) / 20) + 1
  const [books] = useBooks(page)

  const [firstIdx, setFirstIdx] = useState(0)
  const [secondIdx, setSecondIdx] = useState(1)
  const [thirdIdx, setThirdIdx] = useState(2)

  const remainder = curIdx % 3
  const secondCardActive = curIdx === 1 || remainder === 1
  const thirdCardActive = curIdx === 2 || remainder === 2

  const firstBook = books[firstIdx]
  const secondBook = books[secondIdx]
  const thirdBook = books[thirdIdx]

  const [swipeA, swipeB, swipeC] = swipeInstances

  useEffect(() => {
    const updateZIdx = (aZ, bZ, cZ) => {
      runOnUI(() => {
        'worklet'
        swipeA.animation.zIndex.value = aZ
        swipeB.animation.zIndex.value = bZ
        swipeC.animation.zIndex.value = cZ
      })()
    }

    const enableSwipe = (enableSwipe, disableSwipe, resetSwipe = true) => {
      enableSwipe.enableWithCooldown()
      disableSwipe.disable()
      resetSwipe && runOnUI(disableSwipe.animation.reset)()
    }

    if (curIdx === 0) {
      swipeA.enable()
      swipeB.disable()
      swipeC.disable()
      updateZIdx(3, 2, 1)
    }

    if (curIdx !== 0 && remainder === 0) {
      enableSwipe(swipeA, swipeB)
      updateZIdx(3, 2, 1)
      setThirdIdx(thirdIdx + 3)

      setCurSwipe(swipeA)
    }

    if (secondCardActive) {
      enableSwipe(swipeB, swipeC)
      updateZIdx(1, 3, 2)
      setFirstIdx(firstIdx + 3)

      setCurSwipe(swipeB)
    }

    if (thirdCardActive) {
      enableSwipe(swipeC, swipeA)
      updateZIdx(2, 1, 3)
      setSecondIdx(secondIdx + 3)

      setCurSwipe(swipeC)
    }
  }, [curIdx])

  return (
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
  )
}

export default BookList