import styled from 'styled-components/native'

export const Button = styled.Pressable`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
  background: ${({ isDark, theme }) =>
    isDark ? theme.colors.BLACK : theme.colors.WHITE};
`
