import styled from 'styled-components/native'

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
