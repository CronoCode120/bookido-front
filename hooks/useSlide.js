import { Gesture } from 'react-native-gesture-handler'
import {
  clamp,
  useSharedValue,
  withSpring,
  withTiming,
  runOnJS
} from 'react-native-reanimated'

const useSlide = (containerHeight, onClose) => {
  const SLIDE_VELOCITY = 1600

  const translateY = useSharedValue(0)
  const prevTranslateY = useSharedValue(0)

  const minTranslateY = -containerHeight
  const decisionThreshold = -Math.round(containerHeight / 3)

  const resetPosition = () => {
    'worklet'
    translateY.value = withSpring(prevTranslateY.value)
  }

  const closeContainer = () => {
    'worklet'
    translateY.value = withTiming(
      0,
      {
        duration: 400
      },
      _finished => {
        runOnJS(onClose)()
      }
    )
  }

  const panGesture = Gesture.Pan()
    .minDistance(1)
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
    closeContainer
  }
}

export default useSlide
