import { View, StyleSheet } from 'react-native'
import SideTouch from './SideTouch.jsx'
import CardContent from './CardContent.jsx'
import SwipeDetector from './SwipeDetector.jsx'
import SwipeButtons from './SwipeButtons.jsx'
import { useBookSynopsis } from '../../hooks'
import { CardWrapper, Container } from './styles/BookCard.js'

const BookCard = ({
  book,
  swipe,
  pageNum,
  prevPage,
  nextPage,
  btnDisabled
}) => {
  const [synopsis] = useBookSynopsis(book.isbn?.[0] ?? '')
  const bookData = { ...book, synopsis }

  return (
    <View
      pointerEvents='box-none'
      style={{
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <SwipeDetector
        animatedStyles={swipe.animatedStyles}
        panGesture={swipe.panGesture}
      >
        <Container>
          <SideTouch handleLeft={prevPage} handleRight={nextPage} />
          <SwipeButtons
            swipeLeft={swipe.swipeLeft}
            swipeRight={swipe.swipeRight}
            disabled={btnDisabled}
            pageNum={pageNum}
          />
          <CardWrapper>
            <CardContent pageNum={pageNum} book={bookData} />
          </CardWrapper>
        </Container>
      </SwipeDetector>
    </View>
  )
}

export default BookCard
