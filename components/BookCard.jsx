import { useState } from 'react'
import CoverView from './CoverView.jsx'
import BookViews from './BookViews.jsx'
import SideTouch from './SideTouch.jsx'
import { CardWrapper, Container, ContentWrapper } from './styles/BookCard.js'
import DetailView from './DetailView.jsx'

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
          <ContentWrapper>
            {(pageNum === 0 && <CoverView />) ||
              (pageNum === 1 && <DetailView />)}
          </ContentWrapper>
        </CardWrapper>
      </Container>
    </>
  )
}

export default BookCard
