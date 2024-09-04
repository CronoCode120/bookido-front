import { GestureDetector } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

const SwipeDetector = ({ children, animatedStyles, panGesture }) => {
  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[animatedStyles]}>{children}</Animated.View>
    </GestureDetector>
  )
}

export default SwipeDetector
