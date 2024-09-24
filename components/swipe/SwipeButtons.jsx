import SwipeBtn from './SwipeBtn.jsx'
import { Wrapper } from './styles/SwipeButtons.js'
import { ClockIcon, DislikeIcon, LikeIcon } from '../icons'

const SwipeButtons = ({
  pageNum,
  swipeRight,
  swipeLeft,
  swipeUp,
  disabled
}) => {
  const gradientColors =
    pageNum === 0 ? ['#1F1F1F00', '#1F1F1F'] : ['transparent', 'transparent']

  return (
    <Wrapper colors={gradientColors}>
      <SwipeBtn
        onPress={swipeLeft}
        disabled={disabled}
        Icon={() => <DislikeIcon big />}
      />
      <SwipeBtn onPress={swipeUp} disabled={disabled} Icon={ClockIcon} />
      <SwipeBtn
        onPress={swipeRight}
        disabled={disabled}
        Icon={() => <LikeIcon big />}
      />
    </Wrapper>
  )
}

export default SwipeButtons
