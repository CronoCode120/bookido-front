import { HeartIcon, DislikeIcon, LikeIcon } from '../icons'
import {
  ReviewHeader,
  ReviewText,
  ReviewWrapper,
  UserName
} from './styles/ReviewItem.js'

const ReviewItem = ({ user, value, review }) => {
  const ratingIcons = [DislikeIcon, LikeIcon, HeartIcon]
  const Icon = ratingIcons[value]

  return (
    <ReviewWrapper>
      <ReviewHeader>
        <UserName>{user}</UserName>
        <Icon selected />
      </ReviewHeader>
      <ReviewText>{review}</ReviewText>
    </ReviewWrapper>
  )
}

export default ReviewItem
