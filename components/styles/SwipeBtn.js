import styled from 'styled-components/native'

export const Button = styled.Pressable`
  border: 1px solid black;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
`
