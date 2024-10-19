import { useEffect } from 'react'
import {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

const useButtonAnimation = ({ disabled } = {}) => {
  const DURATION = 150

  const opacity = useSharedValue(1)

  const animateOpacity = runOnUI((value, duration) => {
    'worklet'
    opacity.value = withTiming(value, { duration })
  })

  useEffect(() => {
    if (!disabled && opacity.value !== 1) animateOpacity(1, DURATION)
    if (disabled && opacity.value === 1) animateOpacity(0.6, DURATION)
  }, [disabled])

  const animatePressIn = () => animateOpacity(0.6, DURATION)

  const animatePressOut = () => animateOpacity(1, DURATION)

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value
  }))

  return { animatedStyle, animatePressIn, animatePressOut }
}

export default useButtonAnimation
