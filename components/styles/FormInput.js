import styled from 'styled-components/native'

export const InputWrapper = styled.View`
  gap: 8px;
`

export const Input = styled.TextInput.attrs({
  cursorColor: 'black',
  selectionColor: '#1F1F1F44'
})`
  border-radius: 12px;
  height: 40px;
  padding: 10px 12px;
  background: ${({ theme }) => theme.colors.NEUTRAL_200};
`

export const StyledText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.NEUTRAL_500};
`
