import { forwardRef } from 'react'
import { Label, StyledButton } from './styles/Button.js'
import { Link } from 'expo-router'
import { useButtonAnimation } from '../hooks'
import Animated from 'react-native-reanimated'

const Button = ({
  children,
  onPress,
  type = 'primary',
  warning = false,
  disabled = false,
  style
}) => {
  const { animatedStyle, animatePressIn, animatePressOut } = useButtonAnimation(
    { disabled }
  )

  const AnimatedButton = Animated.createAnimatedComponent(StyledButton)

  return (
    <AnimatedButton
      onPress={onPress}
      type={type}
      warning={warning}
      onPressIn={animatePressIn}
      onPressOut={animatePressOut}
      style={[animatedStyle, { ...style }]}
    >
      <Label type={type} warning={warning}>
        {children}
      </Label>
    </AnimatedButton>
  )
}

export const LinkButton = ({ href, type, warning, style, children }) => (
  <Link href={href} asChild>
    <RefBtn type={type} warning={warning} style={style}>
      {children}
    </RefBtn>
  </Link>
)

const RefBtn = forwardRef(function Button(
  { children, onPress, type = 'primary', warning = false, style },
  ref
) {
  return (
    <AnimatedButton
      onPress={onPress}
      type={type}
      warning={warning}
      style={style}
      ref={ref}
    >
      <Label type={type} warning={warning}>
        {children}
      </Label>
    </AnimatedButton>
  )
})

export default Button
