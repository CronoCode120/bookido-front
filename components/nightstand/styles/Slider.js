import styled from 'styled-components/native'

export const PannableArea = styled.View`
  align-self: stretch;
  padding: 10px 0;
`

export const SlideBar = styled.View`
  border: 2px solid ${({ theme }) => theme.colors.NEUTRAL_500};
  border-radius: 99px;
  width: 60px;
  margin: 0 auto;
`
