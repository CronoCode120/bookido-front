import styled from 'styled-components/native'
import { getWidthPercent } from '../../utils/dimensions.js'

export const Container = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
`

export const CardWrapper = styled.View`
  align-items: center;
  justify-content: center;
  gap: 30px;
  width: ${getWidthPercent(95)}px;
  background-color: white;
  border: 1px solid green;
  border-radius: 30px;
  padding: 24px;
  box-shadow: 2px 2px 1px black;
`
