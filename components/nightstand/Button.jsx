import { Label, StyledButton } from './styles/Button.js'

const Button = ({ children, onPress, type = 'primary' }) => {
  return (
    <StyledButton onPress={onPress} type={type}>
      <Label type={type}>{children}</Label>
    </StyledButton>
  )
}

export default Button
