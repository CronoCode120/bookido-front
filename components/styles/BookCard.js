import styled from 'styled-components/native'
import { getWidthPercent } from '../../utils/dimensions.js'

export const Container = styled.View`
  width: ${getWidthPercent(80)}px;
  align-items: center;
  justify-content: center;
  gap: 30px;
  background-color: white;
  border: 1px solid black;
`
