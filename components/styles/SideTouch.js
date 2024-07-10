import styled from 'styled-components/native'

export const TouchWrapper = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 99;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
`

export const SidePressable = styled.Pressable`
  width: 80px;
`
