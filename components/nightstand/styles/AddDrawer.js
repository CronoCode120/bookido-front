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

export const ContentWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Cover = styled.Image`
  aspect-ratio: 1/1.5;
  width: 28%;
  border-radius: 6px;
`

export const InfoWrapper = styled.View`
  width: 65%;
  justify-content: space-between;
  gap: 12px;
`

export const Heading = styled.View`
  gap: 6px;
`

export const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
`

export const Author = styled.Text`
  font-size: 16px;
  font-weight: 300;
`

export const DetailWrapper = styled.View``

export const DetailText = styled.Text`
  font-size: 16px;
  font-weight: 300;
`

export const DetailTitle = styled(DetailText)`
  font-weight: 400;
`
