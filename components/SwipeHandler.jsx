import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView
} from 'react-native-gesture-handler'

const SwipeHandler = ({ children }) => {
  const pan = Gesture.Pan()
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={pan}>{children}</GestureDetector>
    </GestureHandlerRootView>
  )
}

export default SwipeHandler
