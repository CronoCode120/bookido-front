import SideTouch from './SideTouch.jsx'
import CardContent from './CardContent.jsx'
import SwipeDetector from './SwipeDetector.jsx'
import SwipeButtons from './SwipeButtons.jsx'
import { useBookSynopsis } from '../../hooks'
import { CardWrapper, Container, Wrapper } from './styles/BookCard.js'

const BookCard = ({
  book,
  swipe,
  pageNum,
  prevPage,
  nextPage,
  btnDisabled
}) => {
  const synopsis = book?.description || useBookSynopsis(book.isbn?.[0] ?? '')[0]
  const bookData = { ...book, synopsis }

  return (
    <Container>
      <SwipeDetector
        animatedStyles={swipe.animatedStyles}
        panGesture={swipe.panGesture}
      >
        <Wrapper>
          <SideTouch handleLeft={prevPage} handleRight={nextPage} />
          <SwipeButtons
            swipeLeft={swipe.swipeLeft}
            swipeRight={swipe.swipeRight}
            swipeUp={swipe.swipeUp}
            disabled={btnDisabled}
            pageNum={pageNum}
          />
          <CardWrapper>
            <CardContent pageNum={pageNum} book={bookData} />
          </CardWrapper>
        </Wrapper>
      </SwipeDetector>
    </Container>
  )
}

export default BookCard
