import styled from 'styled-components/native'

export const Wrapper = styled.View`
  background: ${({ bgColor, theme }) => bgColor || theme.colors.ROSE_600};
  padding: 6px 50px;
  border-radius: 30px;
  position: absolute;
  top: -100px;
`

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
  text-align: center;
  align-self: stretch;
`
