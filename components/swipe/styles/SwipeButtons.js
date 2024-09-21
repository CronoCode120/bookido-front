import { LinearGradient } from 'expo-linear-gradient'
import styled from 'styled-components/native'

export const Wrapper = styled(LinearGradient)`
  position: absolute;
  z-index: 12;
  bottom: 0;
  width: 100%;
  border-radius: 8px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
`
