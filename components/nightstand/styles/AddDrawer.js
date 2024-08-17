import { BlurView } from 'expo-blur'
import styled from 'styled-components/native'

export const BlurWrapper = styled(BlurView).attrs({
  experimentalBlurMethod: 'dimezisBlurView'
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 40px 40px 0 0;
  height: 589px;
  padding: 24px;
  padding-top: 40px;
  background: #fffafad9;
`
