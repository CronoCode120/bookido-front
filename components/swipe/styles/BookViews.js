import styled from 'styled-components/native'
import { getWidthPercent } from '../../../utils/dimensions.js'

export const Indicator = styled.View`
  flex: 1;
  border-radius: 6px;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.ROSE_400 : theme.colors.ROSE_50};
`

export const Container = styled.View`
  flex-direction: row;
  width: ${getWidthPercent(90)}px;
  height: 4px;
  gap: 15px;
`
