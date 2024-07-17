import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView
} from 'react-native-gesture-handler'
import Animated, { withTiming, Easing } from 'react-native-reanimated'
import useSwipeAnimation from '../hooks/useSwipeAnimation.js'

const SwipeHandler = ({ children }) => {
  const {
    translationX,
    translationY,
    prevTranslationX,
    prevTranslationY,
    animatedStyles
  } = useSwipeAnimation()

  const resetAnim = withTiming(0, {
    easing: Easing.out(Easing.back(2))
  })

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
    .onEnd(() => {
      translationX.value = resetAnim
      translationY.value = resetAnim
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
