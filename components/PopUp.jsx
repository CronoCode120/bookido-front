import Animated from 'react-native-reanimated'
import { usePopUp } from '../hooks'
import { StyledText, Wrapper } from './styles/PopUp.js'

const PopUp = ({ message, bgColor, visible }) => {
  const { animatedStyle } = usePopUp(visible)
  const AnimatedPopUp = Animated.createAnimatedComponent(Wrapper)

  return (
    <AnimatedPopUp bgColor={bgColor} style={[animatedStyle]}>
      <StyledText>{message}</StyledText>
    </AnimatedPopUp>
  )
}

export default PopUp
