import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Slider from './Slider.jsx'
import { Shadow } from 'react-native-shadow-2'
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

import { useModal } from '../../context/ModalProvider.js'

const DrawerModal = ({ children }) => {
  const [zIndex, setZIndex] = useState(-1)

  const { visible, panGesture, translateY, HEIGHT } = useModal()

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
    transform: [{ translateY: translateY.value }]
  }))

  const animatedBlurProps = useAnimatedProps(() => ({
    intensity: blurIntensity.value
  }))

  const AnimatedBlur = Animated.createAnimatedComponent(BlurWrapper)

  const containerStyle = StyleSheet.create({
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    height: HEIGHT,
    overflow: 'hidden',
    paddingHorizontal: 24,
    paddingBottom: 20,
    backgroundColor: '#fffafad9'
  })

  if (visible)
    return (
      <>
        <AnimatedBlur animatedProps={animatedBlurProps} style={{ zIndex }} />
        <Animated.View style={[animatedStyle, { zIndex: 3 }]}>
          <Shadow sides={{ bottom: false, start: false, end: false }} stretch>
            <View style={containerStyle}>
              <Slider panGesture={panGesture} />
              <ContentView>{children}</ContentView>
            </View>
          </Shadow>
        </Animated.View>
      </>
    )
}

export default DrawerModal
