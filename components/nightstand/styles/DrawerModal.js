import styled from 'styled-components/native'

export const ContentView = styled.View`
  flex: 1;
  justify-content: space-between;
  margin: 30px 0;
`

export const Background = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.BLACK};
`
