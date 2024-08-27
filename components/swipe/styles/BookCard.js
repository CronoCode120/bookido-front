import styled from 'styled-components/native'
import { getHeightPercent, getWidthPercent } from '../../../utils/dimensions.js'

export const Container = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
`

export const CardWrapper = styled.View`
  border-radius: 30px;
  align-items: center;
  justify-content: start;
  gap: 30px;
  width: ${getWidthPercent(95)}px;
  height: ${getHeightPercent(80)}px;
  background-color: white;
  padding: 24px;
`

export const ContentWrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex: 1;
`
