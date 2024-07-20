import {
  GestureHandlerRootView,
  GestureDetector
} from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'

const SwipeDetector = ({ children, animatedStyles, panGesture }) => {
  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[animatedStyles]}>{children}</Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}

export default SwipeDetector
