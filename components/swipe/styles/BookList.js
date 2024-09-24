import { GestureHandlerRootView } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const CardGestureHandler = styled(GestureHandlerRootView)`
  align-items: center;
  align-self: stretch;
  aspect-ratio: 65 / 94;
`
