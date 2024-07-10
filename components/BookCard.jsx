import { useState } from 'react'
import BookViews from './BookViews.jsx'
import SideTouch from './SideTouch.jsx'
import CardContent from './CardContent.jsx'
import { CardWrapper, Container } from './styles/BookCard.js'

const BookCard = () => {
  const [pageNum, setPageNum] = useState(0)

  const handleLeft = () => {
    setPageNum(prevNum => (prevNum <= 0 ? prevNum : --prevNum))
  }

  const handleRight = () => {
    setPageNum(prevNum => (prevNum >= 2 ? prevNum : ++prevNum))
  }

  return (
    <>
      <Container>
        <SideTouch handleLeft={handleLeft} handleRight={handleRight} />
        <CardWrapper>
          <BookViews pageNum={pageNum} />
          <CardContent pageNum={pageNum} />
        </CardWrapper>
      </Container>
    </>
  )
}

export default BookCard
