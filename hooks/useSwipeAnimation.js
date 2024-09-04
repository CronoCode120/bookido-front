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
  const scale = useSharedValue(1)
  const zIndex = useSharedValue(1)
  const opacity = useSharedValue(1)

  const MAX_ROTATION = 60
  const rotate = useDerivedValue(() =>
    interpolate(translationX.value, [0, windowWidth * 2], [0, MAX_ROTATION])
  )

  const animatedStyles = useAnimatedStyle(() => ({
    zIndex: zIndex.value,
    opacity: opacity.value,
    transform: [
      { translateX: translationX.value },
      { translateY: translationY.value },
      { rotate: `${rotate.value}deg` },
      { scale: scale.value }
    ]
  }))

  return {
    translationX,
    translationY,
    prevTranslationX,
    prevTranslationY,
    scale,
    zIndex,
    opacity,
    animatedStyles
  }
}

export default useSwipeAnimation
