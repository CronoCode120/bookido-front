import { useState, useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { runOnUI } from 'react-native-reanimated'
import BookCard from './BookCard.jsx'
import BookViews from './BookViews.jsx'
import { useBookPages } from '../../hooks'
import { CardGestureHandler, Wrapper } from './styles/BookList.js'

const BookList = ({ books, curIdx, swipeInstances, btnDisabled }) => {
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
    }

    if (secondCardActive) {
      enableSwipe(swipeB, swipeC)
      updateZIdx(1, 3, 2)
      setFirstIdx(firstIdx + 3)
    }

    if (thirdCardActive) {
      enableSwipe(swipeC, swipeA)
      updateZIdx(2, 1, 3)
      setSecondIdx(secondIdx + 3)
    }
  }, [curIdx])

  const { pageNum, handleLeft, handleRight } = useBookPages(curIdx)

  if (!books.length)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <ActivityIndicator />
      </View>
    )

  return (
    <Wrapper>
      <BookViews pageNum={pageNum} />
      <CardGestureHandler>
        {firstBook && (
          <BookCard
            book={firstBook}
            swipe={swipeA}
            pageNum={curIdx === 0 || remainder === 0 ? pageNum : 0}
            prevPage={handleLeft}
            nextPage={handleRight}
            btnDisabled={btnDisabled}
          />
        )}
        {secondBook && (
          <BookCard
            book={secondBook}
            swipe={swipeB}
            pageNum={secondCardActive ? pageNum : 0}
            prevPage={handleLeft}
            nextPage={handleRight}
            btnDisabled={btnDisabled}
          />
        )}
        {thirdBook && (
          <BookCard
            book={thirdBook}
            swipe={swipeC}
            pageNum={thirdCardActive ? pageNum : 0}
            prevPage={handleLeft}
            nextPage={handleRight}
            btnDisabled={btnDisabled}
          />
        )}
      </CardGestureHandler>
    </Wrapper>
  )
}

export default BookList
