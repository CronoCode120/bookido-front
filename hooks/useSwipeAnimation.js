import {
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  interpolate
} from 'react-native-reanimated'

const useSwipeAnimation = windowWidth => {
  const translationX = useSharedValue(0)
  const translationY = useSharedValue(0)
  const prevTranslationX = useSharedValue(0)
  const prevTranslationY = useSharedValue(0)

  const MAX_ROTATION = 60
  const rotate = useDerivedValue(
    () =>
      interpolate(translationX.value, [0, windowWidth * 2], [0, MAX_ROTATION]) +
      'deg'
  )

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value },
      { rotate: rotate.value }
    ]
  }))

  return {
    translationX,
    translationY,
    prevTranslationX,
    prevTranslationY,
    animatedStyles
  }
}

export default useSwipeAnimation
