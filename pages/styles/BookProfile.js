import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 24px;
`

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.HEADING};
  margin-top: 24px;
  margin-bottom: 10px;
`

export const Author = styled.Text`
  text-align: center;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  margin-bottom: 4px;
`

export const Publisher = styled.Text`
  text-align: center;
  margin-bottom: 40px;
`

export const SynopsisHeading = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  font-size: 18px;
  align-self: stretch;
  margin-bottom: 16px;
`

export const SynopsisBody = styled.Text`
  align-self: stretch;
`
