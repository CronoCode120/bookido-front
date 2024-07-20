import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView
} from 'react-native-gesture-handler'
import Animated, { withSpring, runOnJS } from 'react-native-reanimated'
import useSwipeAnimation from '../hooks/useSwipeAnimation.js'
import { useWindowDimensions } from 'react-native'

const SWIPE_VELOCITY = 1600

const SwipeHandler = ({ children, onSwipeLeft, onSwipeRight }) => {
  const { width } = useWindowDimensions()
  const {
    translationX,
    translationY,
    prevTranslationX,
    prevTranslationY,
    animatedStyles
  } = useSwipeAnimation(width)

  const decisionThreshold = width * 0.4
  const hiddenTranslateX = width * 2

  const resetPosition = () => {
    'worklet'
    translationX.value = withSpring(0, { duration: 1600 })
    translationY.value = withSpring(0, { duration: 1600 })
  }

  const swipe = () => {
    'worklet'
    const goLeft = translationX.value < 0
    translationX.value = withSpring(
      hiddenTranslateX * Math.sign(translationX.value)
    )
    goLeft ? runOnJS(onSwipeLeft)() : runOnJS(onSwipeRight)()
  }

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
      const velocityX = event.velocityX
      const decisionMade = Math.abs(translationX.value) >= decisionThreshold

      if (Math.abs(velocityX) > SWIPE_VELOCITY || decisionMade) return swipe()

      resetPosition()
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
