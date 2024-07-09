import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

export const TouchWrapper = styled.View`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 99;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
  flex-direction: row;
  justify-content: space-between;
`

export const SidePressable = styled.Pressable`
  border: 1px solid black;
  width: 80px;
`
