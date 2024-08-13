import styled from 'styled-components/native'

export const Indicator = styled.View`
  width: 64px;
  height: 8px;
  border-radius: 30px;
  background-color: ${props => (props.active ? 'darkgray' : 'lightgray')};
`

export const Container = styled.View`
  flex-direction: row;
  gap: 15px;
`
