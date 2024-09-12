import { forwardRef } from 'react'
import { Label, StyledButton } from './styles/Button.js'
import { Link } from 'expo-router'

const Button = ({ children, onPress, type = 'primary' }) => {
  return (
    <StyledButton onPress={onPress} type={type}>
      <Label type={type}>{children}</Label>
    </StyledButton>
  )
}

export const LinkButton = ({ href, type, children }) => (
  <Link href={href} asChild>
    <RefBtn type={type}>{children}</RefBtn>
  </Link>
)

const RefBtn = forwardRef(function Button(
  { children, onPress, type = 'primary' },
  ref
) {
  return (
    <StyledButton onPress={onPress} type={type} ref={ref}>
      {children}
    </StyledButton>
  )
})

export default Button
