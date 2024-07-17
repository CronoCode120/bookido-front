import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView
} from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle
} from 'react-native-reanimated'

const SwipeHandler = ({ children }) => {
  const translationX = useSharedValue(0)
  const translationY = useSharedValue(0)
  const prevTranslationX = useSharedValue(0)
  const prevTranslationY = useSharedValue(0)

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value }
    ]
  }))

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
    .runOnJS(true)

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
