import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../../components/Button.jsx'
import { getHeightPercent } from '../../utils/dimensions.js'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.View`
  width: 80%;
  max-width: 320px;
  justify-content: space-between;
  align-items: center;
`

export const MainWrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  margin-top: 40px;
  height: 70%;
`

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.HEADING};
  text-align: center;
`

export const BottomWrapper = styled.View`
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  height: 75%;
`

export const ButtonWrapper = styled.View`
  align-self: stretch;
  align-items: center;
  gap: 26px;
`

export const StyledButton = styled(Button)`
  align-self: stretch;
`

export const SvgWrapper = styled.View`
  height: ${getHeightPercent(38)}px;
`
