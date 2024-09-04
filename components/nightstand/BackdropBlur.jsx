import { useState, useEffect } from 'react'
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedProps
} from 'react-native-reanimated'
import { BlurWrapper } from './styles/BackdropBlur.js'

const BackdropBlur = ({ visible, children }) => {
  const blurIntensity = useSharedValue(0)
  const [zIndex, setZIndex] = useState(-1)
  const DURATION = 150

  useEffect(() => {
    blurIntensity.value = withTiming(visible ? 40 : 0, {
      duration: DURATION
    })
    if (visible) setZIndex(1)
    if (!visible) setTimeout(() => setZIndex(-1), DURATION)
  }, [visible])

  const animatedProps = useAnimatedProps(() => ({
    intensity: blurIntensity.value
  }))

  const AnimatedBlurView = Animated.createAnimatedComponent(BlurWrapper)

  return (
    <AnimatedBlurView animatedProps={animatedProps} style={{ zIndex }}>
      {children}
    </AnimatedBlurView>
  )
}

export default BackdropBlur
