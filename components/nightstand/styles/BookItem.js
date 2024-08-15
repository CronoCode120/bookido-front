import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 90%;
  border: 1px solid black;
  padding: 14px;
  gap: 14px;
  border-radius: 12px;
  background: #e2e8f066;
`

export const Heading = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const Cover = styled.Image`
  width: 20%;
  height: auto;
  aspect-ratio: 1/1.5;
  border-radius: 6px;
`
