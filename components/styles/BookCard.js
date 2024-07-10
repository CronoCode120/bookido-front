import styled from 'styled-components/native'
import { getHeightPercent, getWidthPercent } from '../../utils/dimensions.js'

export const Container = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
`

export const CardWrapper = styled.View`
  align-items: center;
  justify-content: start;
  gap: 30px;
  width: ${getWidthPercent(95)}px;
  height: ${getHeightPercent(80)}px;
  background-color: white;
  border: 1px solid green;
  border-radius: 30px;
  padding: 24px;
`

export const ContentWrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  flex: 1;
`