import styled from 'styled-components/native'

export const ReviewWrapper = styled.View`
  width: 100%;
  height: 150px;
  padding: 10px 20px;
  gap: 10px;
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.NEUTRAL_100};
`

export const ReviewHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const UserName = styled.Text.attrs({
  numberOfLines: 1
})`
  max-width: 85%;
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
`

export const ReviewText = styled.Text`
  font-size: 12px;
`
