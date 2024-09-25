import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components/native'
import Button from '../../components/Button.jsx'

export const Container = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 64px;
  width: 80%;
  max-width: 300px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADING};
  font-size: 24px;
  text-align: center;
`

export const StyledButton = styled(Button)`
  align-self: stretch;
`

export const Image = styled.Image`
  height: 32%;
  width: 200px;
  background-color: gray;
`
