import styled from 'styled-components/native'
import { getHeightPercent } from '../../utils/dimensions.js'

export const Cover = styled.Image`
  width: auto;
  height: ${getHeightPercent(45)}px;
  max-height: 450px;
  aspect-ratio: 1/1.5;
  border-radius: 20px;
  background-color: lightgray;
`
