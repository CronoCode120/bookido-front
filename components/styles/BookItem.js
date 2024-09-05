import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 100%;
  padding: 14px;
  gap: 14px;
  border-radius: 12px;
  background: #e2e8f0;
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

export const AddButton = styled.Pressable`
  margin: 0 0 auto 0;
  padding: 5px;
  border-radius: 99px;
`
