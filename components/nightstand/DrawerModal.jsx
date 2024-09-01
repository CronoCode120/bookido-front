import Slider from './Slider.jsx'
import { ContentView } from './styles/DrawerModal.js'
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
import { useBackAction, useSlide } from '../../hooks'
import { Shadow } from 'react-native-shadow-2'
import { View } from 'react-native'

const DrawerModal = ({ visible, onClose, children }) => {
  const [zIndex, setZIndex] = useState(-1)
  const HEIGHT = 460

  const { panGesture, translateY, closeContainer } = useSlide(HEIGHT, onClose)

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

  useBackAction(() => {
    if (visible) {
      closeContainer()
      return true
    }
    return false
  }, [visible])

  if (visible)
    return (
      <>
        <AnimatedBlur animatedProps={animatedBlurProps} style={{ zIndex }} />
        <Animated.View style={[animatedStyle]}>
          <Shadow sides={{ bottom: false, start: false, end: false }} stretch>
            <View
              style={{
                position: 'absolute',
                top: '100%',
                left: 0,
                right: 0,
                borderTopStartRadius: 40,
                borderTopEndRadius: 40,
                height: 460,
                overflow: 'hidden',
                paddingHorizontal: 24,
                paddingBottom: 20,
                backgroundColor: '#fffafad9'
              }}
            >
              <Slider panGesture={panGesture} />
              <ContentView>{children}</ContentView>
            </View>
          </Shadow>
        </Animated.View>
      </>
    )
}

export default DrawerModal
