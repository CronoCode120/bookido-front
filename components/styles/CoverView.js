import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

export const Cover = styled.Image`
  height: ${(Dimensions.get('window').height / 100) * 50}px;
  width: auto;
  max-height: 450px;
  aspect-ratio: 1/1.5;
  border-radius: 20px;
  background-color: lightgray;
`
