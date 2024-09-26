import Animated, {
  interpolateColor,
  runOnUI,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { StyledIndicator, Wrapper } from './styles/PageIndicator'
import { useTheme } from 'styled-components'
import { useEffect } from 'react'

const PageIndicator = ({ pages, pageNum }) => {
  return (
    <Wrapper>
      {Array(pages)
        .fill()
        .map((_, idx) => (
          <Indicator key={idx} active={idx + 1 === pageNum} />
        ))}
    </Wrapper>
  )
}

export default PageIndicator

const Indicator = ({ active }) => {
  const MIN_WIDTH = 10
  const ACTIVE_WIDTH = 40
  const { colors } = useTheme()

  const progress = useDerivedValue(() => withTiming(active ? 1 : 0))

  const width = useSharedValue(MIN_WIDTH)

  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      [colors.NEUTRAL_200, colors.AMBER_600]
    )
  }))

  const animateWidth = value => {
    'worklet'
    width.value = withTiming(value)
  }

  useEffect(() => {
    if (active) runOnUI(animateWidth)(ACTIVE_WIDTH)

    if (!active) runOnUI(animateWidth)(MIN_WIDTH)
  }, [active])

  const AnimatedIndicator = Animated.createAnimatedComponent(StyledIndicator)

  return <AnimatedIndicator style={[animatedStyle]} />
}
