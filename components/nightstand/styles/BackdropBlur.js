import styled from 'styled-components/native'
import { BlurView } from 'expo-blur'

export const BlurWrapper = styled(BlurView).attrs({
  experimentalBlurMethod: 'dimezisBlurView'
})`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`
