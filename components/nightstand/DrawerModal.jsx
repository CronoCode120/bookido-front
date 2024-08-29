import Slider from './Slider.jsx'
import { Container, ContentView } from './styles/DrawerModal.js'
import { BlurWrapper } from './styles/BackdropBlur.js'
import Animated, {
  interpolate,
  runOnUI,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withTiming
} from 'react-native-reanimated'
import { useEffect, useState } from 'react'
import { useSlide } from '../../hooks'

const DrawerModal = ({ visible, onClose, children }) => {
  const [zIndex, setZIndex] = useState(-1)
  const HEIGHT = 460

  const { panGesture, translateY } = useSlide(HEIGHT, onClose)

  useEffect(() => {
    if (visible) {
      open()
      setZIndex(1)
    }
    if (!visible) setZIndex(-1)
  }, [visible])

  const duration = 400
  const blurIntensity = useDerivedValue(() =>
    interpolate(translateY.value, [-HEIGHT, 0], [40, 0])
  )

  const open = runOnUI(() => {
    'worklet'
    translateY.value = withTiming(-HEIGHT, {
      duration
    })
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
    zIndex: 3
  }))

  const animatedBlurProps = useAnimatedProps(() => ({
    intensity: blurIntensity.value
  }))

  const AnimatedBlur = Animated.createAnimatedComponent(BlurWrapper)

  if (visible)
    return (
      <>
        <AnimatedBlur animatedProps={animatedBlurProps} style={{ zIndex }} />
        <Animated.View style={[animatedStyle]}>
          <Container>
            <Slider panGesture={panGesture} />
            <ContentView>{children}</ContentView>
          </Container>
        </Animated.View>
      </>
    )
}

export default DrawerModal
