import SwipeBtn from './SwipeBtn.jsx'
import { Wrapper } from './styles/SwipeButtons.js'
import { DislikeIcon, LikeIcon } from '../icons'

const SwipeButtons = ({ pageNum, swipeRight, swipeLeft, disabled }) => {
  const gradientColors =
    pageNum === 0 ? ['#1F1F1F00', '#1F1F1F'] : ['transparent', 'transparent']

  return (
    <Wrapper colors={gradientColors}>
      <SwipeBtn onPress={swipeLeft} disabled={disabled} Icon={DislikeIcon} />
      <SwipeBtn onPress={swipeRight} disabled={disabled} Icon={LikeIcon} />
    </Wrapper>
  )
}

export default SwipeButtons
