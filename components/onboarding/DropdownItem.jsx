import Animated from 'react-native-reanimated'
import { useButtonAnimation } from '../../hooks'
import { Info, Title, Wrapper } from './styles/DropdownItem'

const DropdownItem = ({
  onPress,
  title,
  publisher = 'Sin información de la editorial'
}) => {
  const { animatedStyle, animatePressIn, animatePressOut } =
    useButtonAnimation()

  const AnimatedButton = Animated.createAnimatedComponent(Wrapper)

  return (
    <AnimatedButton
      onPress={onPress}
      style={[animatedStyle]}
      onPressIn={animatePressIn}
      onPressOut={animatePressOut}
    >
      <Title>{title}</Title>
      <Info>{publisher}</Info>
    </AnimatedButton>
  )
}

export default DropdownItem
