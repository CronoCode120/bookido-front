import styled from 'styled-components/native'

export const Container = styled.View`
  align-self: stretch;
  gap: 6px;
`

export const Author = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  font-weight: 600;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADING};
  font-size: 20px;
  font-weight: 600;
`
