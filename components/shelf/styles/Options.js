import styled from 'styled-components/native'
import Button from '../../Button.jsx'

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 16px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  font-size: 16px;
`

export const StyledButton = styled(Button).attrs({
  type: 'secondary'
})`
  align-self: stretch;
`
