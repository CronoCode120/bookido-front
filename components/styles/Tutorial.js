import styled from 'styled-components/native'
import { getDimensions } from '../../utils/dimensions.js'

export const Wrapper = styled.View`
  position: absolute;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 30)}px;
  height: ${getDimensions().height}px;
  left: 0;
  right: 0;
  padding: 24px;
  align-items: center;
  background: ${({ theme }) => theme.colors.BLACK + 'CC'};
  z-index: 5;
`

export const NextButton = styled.Pressable`
  margin-left: auto;
  margin-bottom: 80px;
  border: 1px solid white;
  padding: 10px 15px;
  border-radius: 32px;
`

export const StyledText = styled.Text`
  color: ${({ theme }) => theme.colors.WHITE};
  text-align: center;
  line-height: 20px;
`

export const BoldText = styled(StyledText)`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
`

export const TextWrapper = styled.View`
  gap: 20px;
  width: ${({ $width }) => $width || 190}px;
  align-items: center;
`

export const SideWrapper = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: start;
  align-self: stretch;
  justify-content: center;
  gap: 10px;
`
