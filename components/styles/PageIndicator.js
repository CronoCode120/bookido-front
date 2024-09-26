import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex-direction: row;
  gap: 7px;
`

export const Indicator = styled.View`
  background: ${({ active, theme }) =>
    active ? theme.colors.AMBER_600 : theme.colors.NEUTRAL_200};
  width: ${({ active }) => (active ? 40 : 10)}px;
  height: 10px;
  border-radius: 6px;
`
