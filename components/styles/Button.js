import styled from 'styled-components/native'

const Button = styled.Pressable`
  padding: 10px;
  border-radius: 8px;
`

export const StyledButton = styled(Button)(({ type, theme }) => {
  if (type === 'tertiary')
    return {
      border: '0.8px solid ' + theme.colors.NEUTRAL_500
    }

  return {
    backgroundColor: theme.colors.NEUTRAL_700
  }
})

export const Label = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ type, theme }) =>
    type === 'tertiary' ? theme.colors.NEUTRAL_500 : theme.colors.WHITE};
`
