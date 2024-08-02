import { useState } from 'react'
import BookViews from './BookViews.jsx'
import SideTouch from './SideTouch.jsx'
import CardContent from './CardContent.jsx'
import SwipeDetector from './SwipeDetector.jsx'
import { CardWrapper, Container } from './styles/BookCard.js'
import { View, StyleSheet } from 'react-native'

const BookCard = ({ book, panGesture, animatedStyles }) => {
  const [pageNum, setPageNum] = useState(0)

  const handleLeft = () => {
    setPageNum(prevNum => (prevNum <= 0 ? prevNum : --prevNum))
  }

  const handleRight = () => {
    setPageNum(prevNum => (prevNum >= 1 ? prevNum : ++prevNum))
  }

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
            <CardContent pageNum={pageNum} book={book} />
          </CardWrapper>
        </Container>
      </SwipeDetector>
    </View>
  )
}

export default BookCard
