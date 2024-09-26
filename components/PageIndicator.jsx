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

  const width = useSharedValue(MIN_WIDTH)
  const bgColor = useDerivedValue(() =>
    interpolateColor(
      width.value,
      [MIN_WIDTH, ACTIVE_WIDTH],
      [colors.NEUTRAL_200, colors.AMBER_600]
    )
  )

  const animatedStyle = useAnimatedStyle(() => ({
    width: width.value,
    backgroundColor: bgColor.value
  }))

  useEffect(() => {
    if (active && width.value !== ACTIVE_WIDTH)
      runOnUI(() => {
        'worklet'
        width.value = withTiming(ACTIVE_WIDTH)
      })

    if (!active && width.value === ACTIVE_WIDTH)
      runOnUI(() => {
        'worklet'
        width.value = withTiming(MIN_WIDTH)
      })
  }, [active])

  const AnimatedIndicator = Animated.createAnimatedComponent(StyledIndicator)

  return <AnimatedIndicator style={[animatedStyle]} />
}
