import styled from 'styled-components/native'
import { getDimensions } from '../../utils/dimensions.js'

export const Wrapper = styled.View`
  position: absolute;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 30)}px;
  height: ${getDimensions().height}px;
  left: 0;
  right: 0;
  padding: 24px;
  background: ${({ theme }) => theme.colors.BLACK + 'CC'};
  z-index: 5;
`

export const Container = styled.View`
  flex: 1;
  align-items: center;
`

export const NextButton = styled.Pressable`
  margin-left: auto;
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
  font-size: ${({ fontSize }) => fontSize || 16}px;
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  max-width: 220px;
`

export const TextWrapper = styled.View`
  margin-top: ${({ marginTop }) => marginTop || 0}px;
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

export const TapWrapper = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  padding: 0 26px;
  margin-bottom: 50px;
`

export const TitleText = styled(StyledText)`
  font-family: ${({ theme }) => theme.fonts.HEADING};
  font-size: 20px;
  line-height: 28px;
  max-width: 90%;
  margin-top: 18px;
`
