import { useState } from 'react'
import { useSwipe } from '../../hooks'
import BookList from './BookList.jsx'
import SwipeButtons from './SwipeButtons.jsx'

const BookSwipe = () => {
  const [curIdx, setCurIdx] = useState(0)
  const [btnDisabled, setBtnDisabled] = useState(false)

  const toggleBtnCooldown = () => {
    setBtnDisabled(true)
    setTimeout(() => setBtnDisabled(false), 1500)
  }

  const onSwipeLeft = () => {
    console.log('left')
    setCurIdx(prevIdx => prevIdx + 1)
    toggleBtnCooldown()
  }

  const onSwipeRight = () => {
    console.log('right')
    setCurIdx(prevIdx => prevIdx + 1)
    toggleBtnCooldown()
  }

  const swipes = [
    useSwipe({
      onSwipeLeft,
      onSwipeRight
    }),
    useSwipe({
      onSwipeLeft,
      onSwipeRight
    }),
    useSwipe({
      onSwipeLeft,
      onSwipeRight
    })
  ]

  const [curSwipe, setCurSwipe] = useState(swipes[0])

  return (
    <>
      <BookList
        curIdx={curIdx}
        swipeInstances={swipes}
        setCurSwipe={setCurSwipe}
      />
      <SwipeButtons
        swipeLeft={curSwipe.swipeLeft}
        swipeRight={curSwipe.swipeRight}
        disabled={btnDisabled}
      />
    </>
  )
}

export default BookSwipe
