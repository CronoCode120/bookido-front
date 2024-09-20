import styled from 'styled-components/native'
import { getWidthPercent } from '../../../utils/dimensions.js'

export const Container = styled.View`
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const CardWrapper = styled.View`
  border-radius: 30px;
  overflow: hidden;
  align-items: center;
  justify-content: start;
  gap: 30px;
  width: ${getWidthPercent(90)}px;
  aspect-ratio: 65 / 94;
  background: ${({ theme }) => theme.colors.WHITE};
`

export const ContentWrapper = styled.View`
  justify-content: space-between;
  align-self: stretch;
  flex: 1;
`
