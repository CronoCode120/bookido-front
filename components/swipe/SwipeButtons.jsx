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

  const dark = pageNum !== 0

  return (
    <Wrapper colors={gradientColors}>
      <SwipeBtn
        onPress={swipeLeft}
        disabled={disabled}
        isDark={dark}
        Icon={() => <DislikeIcon dark={dark} big />}
      />
      <SwipeBtn
        onPress={swipeUp}
        disabled={disabled}
        isDark={dark}
        Icon={() => <ClockIcon dark={dark} />}
      />
      <SwipeBtn
        onPress={swipeRight}
        disabled={disabled}
        isDark={dark}
        Icon={() => <LikeIcon big dark={dark} />}
      />
    </Wrapper>
  )
}

export default SwipeButtons
