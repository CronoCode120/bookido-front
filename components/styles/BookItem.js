import styled from 'styled-components/native'

export const Wrapper = styled.View`
  width: 100%;
  padding: 14px;
  gap: 14px;
  border-radius: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.WHITE};
`

export const Heading = styled.View`
  width: 50%;
  gap: 4px;
`

export const Title = styled.Text.attrs({ numberOfLines: 2 })`
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
`

export const InfoText = styled.Text.attrs({ numberOfLines: 1 })``

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
  padding: 5px;
  border-radius: 99px;
`
