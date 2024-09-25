import styled from 'styled-components/native'

export const Wrapper = styled.ScrollView`
  flex: 1;
`

export const Section = styled.View`
  padding: 0 24px;
  align-items: center;
`

export const Title = styled.Text`
  text-align: center;
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.HEADING};
  margin-top: 24px;
  margin-bottom: 10px;
`

export const BoldBodyText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
`

export const Author = styled(BoldBodyText)`
  text-align: center;
  font-size: 18px;
  margin-bottom: 4px;
`

export const Publisher = styled.Text`
  text-align: center;
  margin-bottom: 40px;
`

export const SynopsisHeading = styled(BoldBodyText)`
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
  font-size: 18px;
  align-self: stretch;
  margin-bottom: 16px;
`

export const SynopsisBody = styled.Text`
  align-self: stretch;
`

export const Divider = styled.View`
  height: 1px;
  align-self: stretch;
  margin: 24px 0;
  background: ${({ theme }) => theme.colors.NEUTRAL_100};
`

export const InfoWrapper = styled.View`
  gap: 10px;
  align-self: stretch;
`

export const InfoItem = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
`
