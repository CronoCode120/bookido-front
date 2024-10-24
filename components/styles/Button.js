import styled from 'styled-components/native'

const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
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
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  color: ${({ type, warning, theme }) =>
    type === 'secondary'
      ? warning
        ? theme.colors.ROSE_400
        : theme.colors.BLACK
      : theme.colors.WHITE};
  opacity: ${({ loading }) => (loading ? 0 : 1)};
`

export const LoadWrapper = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.WHITE
}))`
  position: absolute;
  justify-content: center;
  align-items: center;
`
