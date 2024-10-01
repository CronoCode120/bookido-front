import { FlatList } from 'react-native'
import ReviewItem from './ReviewItem.jsx'
import { NoReviewsText, Wrapper } from './styles/ReviewsView.js'

const ReviewsView = ({ reviews = [] }) => {
  const renderReview = ({ item: { user, value, review } }) => (
    <ReviewItem user={user} value={value} review={review} />
  )

  return (
    <Wrapper isEmpty={!reviews.length}>
      {reviews.length ? (
        <FlatList
          data={reviews}
          renderItem={renderReview}
          keyExtractor={({ item }) => item.user}
        />
      ) : (
        <NoReviewsText>Este libro aún no ha recibido reseñas.</NoReviewsText>
      )}
    </Wrapper>
  )
}

export default ReviewsView
