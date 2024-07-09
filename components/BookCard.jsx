import { useState } from 'react'
import CoverView from './CoverView.jsx'
import BookViews from './BookViews.jsx'
import { Container } from './styles/BookCard.js'
import { SidePressable, TouchWrapper } from './styles/SideTouch.js'

const BookCard = () => {
  const [pageNum, setPageNum] = useState(0)

  const handleLeft = () => {
    setPageNum(prevNum => (prevNum <= 0 ? prevNum : --prevNum))
  }

  const handleRight = () => {
    setPageNum(prevNum => (prevNum >= 3 ? prevNum : ++prevNum))
  }

  return (
    <>
      <TouchWrapper>
        <SidePressable onPress={handleLeft} />
        <SidePressable onPress={handleRight} />
      </TouchWrapper>
      <Container>
        <BookViews pageNum={pageNum} />
        <CoverView />
      </Container>
    </>
  )
}

export default BookCard
