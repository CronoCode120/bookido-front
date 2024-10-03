import {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

const useButtonAnimation = () => {
  const PRESS_DURATION = 400

  const opacity = useSharedValue(1)

  const animatePressIn = () => {
    runOnUI(() => {
      'worklet'
      opacity.value = withTiming(0.4, { duration: PRESS_DURATION })
    })
  }

  const animatePressOut = () => {
    runOnUI(() => {
      'worklet'
      opacity.value = withTiming(1, { duration: PRESS_DURATION })
    })
  }

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }))

  return { animatedStyle, animatePressIn, animatePressOut }
}

export default useButtonAnimation
