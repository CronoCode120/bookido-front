import { useEffect } from 'react'
import {
  runOnUI,
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'

const usePopUp = visible => {
  const SHOWN_Y = 140
  const translateY = useSharedValue(0)

  const animatePopUp = value =>
    runOnUI(() => {
      'worklet'
      translateY.value = withTiming(value)
    })

  const showPopUp = animatePopUp(SHOWN_Y)
  const hidePopUp = animatePopUp(0)

  useEffect(() => {
    if (visible && translateY.value !== SHOWN_Y) showPopUp()
    if (!visible && translateY.value === SHOWN_Y) hidePopUp()
  }, [visible])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }]
  }))

  return {
    animatedStyle
  }
}

export default usePopUp
