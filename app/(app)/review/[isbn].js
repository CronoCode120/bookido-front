import { useLocalSearchParams } from 'expo-router'
import Review from '../../../components/nightstand/Review.jsx'

const ReviewPage = () => {
  const { isbn } = useLocalSearchParams()

  return <Review isbn={isbn} />
}

export default ReviewPage
