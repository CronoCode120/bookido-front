import { View, StyleSheet } from 'react-native'
import SideTouch from './SideTouch.jsx'
import CardContent from './CardContent.jsx'
import SwipeDetector from './SwipeDetector.jsx'
import { useBookSynopsis } from '../../hooks'
import { CardWrapper, Container } from './styles/BookCard.js'

const BookCard = ({
  book,
  panGesture,
  animatedStyles,
  pageNum,
  prevPage,
  nextPage
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
      <SwipeDetector animatedStyles={animatedStyles} panGesture={panGesture}>
        <Container>
          <SideTouch handleLeft={prevPage} handleRight={nextPage} />
          <CardWrapper>
            <CardContent pageNum={pageNum} book={bookData} />
          </CardWrapper>
        </Container>
      </SwipeDetector>
    </View>
  )
}

export default BookCard
