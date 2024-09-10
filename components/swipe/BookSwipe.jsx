import { useState } from 'react'
import { useSwipe, useBooks } from '../../hooks'
import BookList from './BookList.jsx'
import SwipeButtons from './SwipeButtons.jsx'

import { useSession } from '../../context/SessionProvider.js'
import { addToTable, discardBook } from '../../api/books.js'

const BookSwipe = () => {
  const [curIdx, setCurIdx] = useState(0)
  const page = Math.floor((curIdx + 3) / 20) + 1

  const [books] = useBooks(page)
  const { session, setUpdateStand } = useSession()

  const [btnDisabled, setBtnDisabled] = useState(false)
  const curIsbn = books[curIdx]?.isbn[0]

  const toggleBtnCooldown = () => {
    setBtnDisabled(true)
    setTimeout(() => setBtnDisabled(false), 1500)
  }

  const handleSwipe = () => {
    setCurIdx(prevIdx => prevIdx + 1)
    toggleBtnCooldown()
  }

  const onSwipeLeft = () => {
    discardBook(curIsbn, session)
    handleSwipe()
  }

  const onSwipeRight = () => {
    addToTable(curIsbn, session).then(() => setUpdateStand(true))
    handleSwipe()
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
        books={books}
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
