import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView
} from 'react-native-gesture-handler'
import Animated, { withSpring } from 'react-native-reanimated'
import useSwipeAnimation from '../hooks/useSwipeAnimation.js'
import { useWindowDimensions } from 'react-native'

const SWIPE_VELOCITY = 1600

const SwipeHandler = ({ children }) => {
  const { width } = useWindowDimensions()
  const {
    translationX,
    translationY,
    prevTranslationX,
    prevTranslationY,
    animatedStyles
  } = useSwipeAnimation(width)

  const hiddenTranslateX = width * 2

  const pan = Gesture.Pan()
    .minDistance(1)
    .onStart(() => {
      prevTranslationX.value = translationX.value
      prevTranslationY.value = translationY.value
    })
    .onUpdate(event => {
      translationX.value = prevTranslationX.value + event.translationX
      translationY.value = prevTranslationY.value + event.translationY
    })
    .onEnd(event => {
      if (Math.abs(event.velocityX) < SWIPE_VELOCITY) {
        translationX.value = withSpring(0, { duration: 1600 })
        translationY.value = withSpring(0, { duration: 1600 })
        return
      }

      if (event.velocityX > SWIPE_VELOCITY) {
        translationX.value = withSpring(
          hiddenTranslateX * Math.sign(event.velocityX)
        )
      }
    })

  return (
    <GestureHandlerRootView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <GestureDetector gesture={pan}>
        <Animated.View style={[animatedStyles]}>{children}</Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  )
}

export default SwipeHandler
