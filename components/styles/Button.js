import styled from 'styled-components/native'

const Button = styled.Pressable`
  padding: 10px;
  border-radius: 65px;
`

export const StyledButton = styled(Button)(({ type, warning, theme }) => {
  const color = warning ? theme.colors.ROSE_400 : theme.colors.BLACK
  if (type === 'secondary')
    return {
      border: '1px solid ' + color
    }

  return {
    border: '1px solid ' + color,
    backgroundColor: color
  }
})

export const Label = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ type, warning, theme }) =>
    type === 'secondary'
      ? warning
        ? theme.colors.ROSE_400
        : theme.colors.BLACK
      : theme.colors.WHITE};
`
