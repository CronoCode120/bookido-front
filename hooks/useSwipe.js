import { Gesture } from 'react-native-gesture-handler'
import { withSpring, runOnJS } from 'react-native-reanimated'
import useSwipeAnimation from './useSwipeAnimation.js'
import { useWindowDimensions } from 'react-native'
import { useState } from 'react'

const SWIPE_VELOCITY = 1600
const COOLDOWN = 1500

const useSwipe = ({ onSwipeLeft, onSwipeRight }) => {
  const [enabled, setEnabled] = useState(true)
  const { width } = useWindowDimensions()
  const {
    translationX,
    translationY,
    prevTranslationX,
    prevTranslationY,
    scale,
    zIndex,
    opacity,
    animatedStyles
  } = useSwipeAnimation(width)

  const decisionThreshold = width * 0.4
  const hiddenTranslateX = width * 2

  const reset = () => {
    'worklet'
    translationX.value = 0
    translationY.value = 0
  }

  const resetPosition = () => {
    'worklet'
    translationX.value = withSpring(0, { duration: 1600 })
    translationY.value = withSpring(0, { duration: 1600 })
  }

  const swipeLeft = () => {
    'worklet'
    translationX.value = withSpring(-hiddenTranslateX)
    runOnJS(onSwipeLeft)()
  }

  const swipeRight = () => {
    'worklet'
    translationX.value = withSpring(hiddenTranslateX)
    runOnJS(onSwipeRight)()
  }

  const enable = () => setEnabled(true)
  const enableWithCooldown = () => setTimeout(enable, COOLDOWN)
  const disable = () => setEnabled(false)

  const panGesture = Gesture.Pan()
    .minDistance(1)
    .enabled(enabled)
    .onStart(() => {
      prevTranslationX.value = translationX.value
      prevTranslationY.value = translationY.value
    })
    .onUpdate(event => {
      translationX.value = prevTranslationX.value + event.translationX
      translationY.value = prevTranslationY.value + event.translationY
    })
    .onEnd(event => {
      const velocityX = event.velocityX
      const decisionMade = Math.abs(translationX.value) >= decisionThreshold

      if (Math.abs(velocityX) > SWIPE_VELOCITY || decisionMade) {
        const goRight = translationX.value > 0
        goRight ? swipeRight() : swipeLeft()
        return
      }

      resetPosition()
    })

  return {
    panGesture,
    animatedStyles,
    swipeLeft,
    swipeRight,
    enable,
    enableWithCooldown,
    disable,
    animation: {
      zIndex,
      opacity,
      scale,
      reset
    }
  }
}

export default useSwipe
