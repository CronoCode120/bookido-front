import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  justify-content: ${({ isEmpty }) => (isEmpty ? 'center' : 'start')};
  padding: 15px;
`

export const NoReviewsText = styled.Text`
  font-size: 20px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
`
