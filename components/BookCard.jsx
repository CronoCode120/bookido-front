import { useState } from 'react'
import BookViews from './BookViews.jsx'
import SideTouch from './SideTouch.jsx'
import CardContent from './CardContent.jsx'
import { CardWrapper, Container } from './styles/BookCard.js'
import SwipeHandler from './SwipeHandler.jsx'

const BookCard = ({ item }) => {
  const [pageNum, setPageNum] = useState(0)

  const handleLeft = () => {
    setPageNum(prevNum => (prevNum <= 0 ? prevNum : --prevNum))
  }

  const handleRight = () => {
    setPageNum(prevNum => (prevNum >= 1 ? prevNum : ++prevNum))
  }

  return (
    <SwipeHandler>
      <Container>
        <SideTouch handleLeft={handleLeft} handleRight={handleRight} />
        <CardWrapper>
          <BookViews pageNum={pageNum} />
          <CardContent pageNum={pageNum} />
        </CardWrapper>
      </Container>
    </SwipeHandler>
  )
}

export default BookCard
