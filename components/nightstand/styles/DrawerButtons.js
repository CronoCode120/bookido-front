import styled from 'styled-components/native'

export const Wrapper = styled.View`
  gap: 20px;
`

export const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`

export const LabelWrapper = styled.View`
  gap: 4px;
`

export const LinkTitle = styled.Text`
  line-height: 24px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.WHITE};
`

export const LinkLabel = styled.Text`
  line-height: 24px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.WHITE};
`
