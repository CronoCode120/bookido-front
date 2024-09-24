import { Gesture } from 'react-native-gesture-handler'
import { withSpring, runOnJS, clamp } from 'react-native-reanimated'
import useSwipeAnimation from './useSwipeAnimation.js'
import { useWindowDimensions } from 'react-native'
import { useState } from 'react'

const SWIPE_VELOCITY = 1600
const COOLDOWN = 1500

const useSwipe = ({ onSwipeLeft, onSwipeRight, onSwipeUp }) => {
  const [enabled, setEnabled] = useState(true)
  const { width, height } = useWindowDimensions()
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

  const decisionThresholdX = width * 0.4
  const decisionThresholdY = height * 0.4
  const hiddenTranslateX = width * 1.5
  const hiddenTranslateY = -height * 1.5

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

  const swipeUp = () => {
    'worklet'
    translationY.value = withSpring(hiddenTranslateY)
    runOnJS(onSwipeUp)()
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
      translationY.value = clamp(
        prevTranslationY.value + event.translationY,
        -800,
        0
      )
    })
    .onEnd(event => {
      const velocityX = event.velocityX
      const velocityY = event.velocityY
      const decisionMadeX = Math.abs(translationX.value) >= decisionThresholdX
      const decisionMadeY = translationY.value <= -decisionThresholdY

      if (Math.abs(velocityX) > SWIPE_VELOCITY || decisionMadeX) {
        const goRight = translationX.value > 0
        goRight ? swipeRight() : swipeLeft()
        return
      }

      if (-velocityY > SWIPE_VELOCITY || decisionMadeY) {
        swipeUp()
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
