import { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Slider from './Slider.jsx'
import { Shadow } from 'react-native-shadow-2'
import { Background, ContentView } from './styles/DrawerModal.js'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue
} from 'react-native-reanimated'

import { useModal } from '../../context/ModalProvider.js'

const DrawerModal = ({ children }) => {
  const [zIndex, setZIndex] = useState(-1)

  const { visible, panGesture, translateY, openContainer, HEIGHT } = useModal()

  useEffect(() => {
    if (visible) {
      openContainer()
      setZIndex(1)
    }
    if (!visible) setZIndex(-1)
  }, [visible])

  const bgOpacity = useDerivedValue(() =>
    interpolate(translateY.value, [-HEIGHT, 0], [0.4, 0])
  )

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }]
  }))

  const animatedOpacity = useAnimatedStyle(() => ({
    opacity: bgOpacity.value
  }))

  const AnimatedBg = Animated.createAnimatedComponent(Background)

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
    backgroundColor: '#fffafa'
  })

  if (visible)
    return (
      <>
        <AnimatedBg style={[animatedOpacity, { zIndex }]} />
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
