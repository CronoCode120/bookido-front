import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
  gap: 7px;
`

export const Indicator = styled.View`
  background: ${({ theme }) => theme.colors.NEUTRAL_200};
  width: 10px;
  height: 10px;
  border-radius: 6px;
`
