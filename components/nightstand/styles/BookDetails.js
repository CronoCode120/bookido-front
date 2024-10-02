import styled from 'styled-components/native'

export const ContentWrapper = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 200px;
  gap: 25px;
  margin-bottom: 25px;
`

export const InfoWrapper = styled.View`
  justify-content: space-between;
  gap: 4px;
`

export const Heading = styled.View`
  gap: 6px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  font-size: 16px;
  text-align: center;
`

export const Author = styled.Text`
  font-size: 16px;
  text-align: center;
`
