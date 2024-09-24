import { forwardRef } from 'react'
import { Label, StyledButton } from './styles/Button.js'
import { Link } from 'expo-router'

const Button = ({ children, onPress, type = 'primary', warning = false }) => {
  return (
    <StyledButton onPress={onPress} type={type} warning={warning}>
      <Label type={type} warning={warning}>
        {children}
      </Label>
    </StyledButton>
  )
}

export const LinkButton = ({ href, type, warning, children }) => (
  <Link href={href} asChild>
    <RefBtn type={type} warning={warning}>
      {children}
    </RefBtn>
  </Link>
)

const RefBtn = forwardRef(function Button(
  { children, onPress, type = 'primary', warning = false },
  ref
) {
  return (
    <StyledButton onPress={onPress} type={type} warning={warning} ref={ref}>
      <Label type={type} warning={warning}>
        {children}
      </Label>
    </StyledButton>
  )
})

export default Button
