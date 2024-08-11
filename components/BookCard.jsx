import { useEffect, useState } from 'react'
import BookViews from './BookViews.jsx'
import SideTouch from './SideTouch.jsx'
import CardContent from './CardContent.jsx'
import SwipeDetector from './SwipeDetector.jsx'
import useBookSynopsis from '../hooks/useBookSynopsis.js'
import { CardWrapper, Container } from './styles/BookCard.js'
import { View, StyleSheet } from 'react-native'

const BookCard = ({ book, panGesture, animatedStyles }) => {
  const [pageNum, setPageNum] = useState(0)

  useEffect(() => {
    setPageNum(0)
  }, [book])

  const handleLeft = () => {
    setPageNum(prevNum => (prevNum <= 0 ? prevNum : --prevNum))
  }

  const handleRight = () => {
    setPageNum(prevNum => (prevNum >= 1 ? prevNum : ++prevNum))
  }

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
          <SideTouch handleLeft={handleLeft} handleRight={handleRight} />
          <CardWrapper>
            <BookViews pageNum={pageNum} />
            <CardContent pageNum={pageNum} book={bookData} />
          </CardWrapper>
        </Container>
      </SwipeDetector>
    </View>
  )
}

export default BookCard
