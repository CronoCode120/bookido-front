import styled from 'styled-components/native'

export const Wrapper = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: white;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  font-size: 16px;
  align-self: stretch;
`

export const Info = styled.Text`
  font-size: 12px;
  align-self: stretch;
`
