import { forwardRef } from 'react'
import { Label, StyledButton } from './styles/Button.js'
import { Link } from 'expo-router'

const Button = ({
  children,
  onPress,
  type = 'primary',
  warning = false,
  style
}) => {
  return (
    <StyledButton onPress={onPress} type={type} warning={warning} style={style}>
      <Label type={type} warning={warning}>
        {children}
      </Label>
    </StyledButton>
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
    <StyledButton
      onPress={onPress}
      type={type}
      warning={warning}
      style={style}
      ref={ref}
    >
      <Label type={type} warning={warning}>
        {children}
      </Label>
    </StyledButton>
  )
})

export default Button
