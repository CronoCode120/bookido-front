import { Gesture } from 'react-native-gesture-handler'
import {
  clamp,
  useSharedValue,
  withTiming,
  runOnJS
} from 'react-native-reanimated'

const useSlide = (containerHeight, onClose) => {
  const SLIDE_VELOCITY = 1600
  const DURATION = 400

  const translateY = useSharedValue(0)
  const prevTranslateY = useSharedValue(0)

  const minTranslateY = -containerHeight
  const decisionThreshold = -Math.round(containerHeight / 3)

  const resetPosition = () => {
    'worklet'
    translateY.value = withTiming(prevTranslateY.value)
  }

  const openContainer = () => {
    'worklet'
    translateY.value = withTiming(-containerHeight, { duration: DURATION })
  }

  const closeContainer = () => {
    'worklet'
    translateY.value = withTiming(
      0,
      {
        duration: DURATION
      },
      _finished => {
        runOnJS(onClose)()
      }
    )
  }

  const panGesture = Gesture.Pan()
    .minDistance(5)
    .onStart(() => {
      prevTranslateY.value = translateY.value
    })
    .onUpdate(event => {
      translateY.value = clamp(
        prevTranslateY.value + event.translationY,
        minTranslateY,
        0
      )
    })
    .onEnd(event => {
      const velocityY = event.velocityY
      const decisionMade = translateY.value >= decisionThreshold

      if (velocityY > SLIDE_VELOCITY || decisionMade) {
        closeContainer()
        return
      }

      resetPosition()
    })

  return {
    panGesture,
    translateY,
    prevTranslateY,
    closeContainer,
    openContainer
  }
}

export default useSlide
