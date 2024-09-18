import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'
import { BlurView } from 'expo-blur'

export const Blur = styled(BlurView).attrs({
  experimentalBlurMethod: 'dimezisBlurView',
  intensity: 40
})`
  border-radius: 12px;
  overflow: hidden;
`

export const Wrapper = styled(LinearGradient).attrs({
  colors: ['#F1F5F980', '#F1F5F933']
})`
  width: 100%;
  padding: 14px;
  gap: 14px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`

export const Heading = styled.View`
  width: 85%;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`

export const InfoText = styled.Text`
  font-size: 16px;
  font-weight: 300;
`

export const DetailWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
`

export const Synopsis = styled(InfoText)`
  flex: 1;
  overflow: hidden;
`

export const ActionButton = styled.Pressable`
  margin: 0 0 auto 0;
  padding: 5px;
  border-radius: 99px;
`
