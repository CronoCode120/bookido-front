import styled from 'styled-components/native'

export const Wrapper = styled.View`
  flex: 1;
  padding: 20px 10px;
  height: 60%;
  gap: 28px;
`

export const SynopsisWrapper = styled.View`
  gap: 12px;
`

export const SynopsisTitle = styled.Text`
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  font-size: 16px;
  margin-bottom: 6px;
`

export const SynopsisContainer = styled.View`
  margin-bottom: 6px;
`

export const Synopsis = styled.Text`
  overflow: hidden;
`
