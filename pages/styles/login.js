import styled from 'styled-components/native'
import BackButton from '../../components/BackButton'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`

export const Wrapper = styled.View`
  align-self: stretch;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 312px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.HEADING};
  font-size: 24px;
  margin-bottom: 28px;
`

export const InputsContainer = styled.View`
  gap: 20px;
`

export const StyledText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.NEUTRAL_500};
`

export const ForgotLink = styled(StyledText)`
  margin-top: 8px;
  margin-bottom: 30px;
  align-self: flex-end;
`

export const Divider = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin: 30px 0;
`

export const Line = styled.View`
  width: 94px;
  height: 1px;
  background: ${({ theme }) => theme.colors.NEUTRAL_300};
`

export const OrText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.NEUTRAL_400};
`

export const RegisterText = styled(StyledText)`
  text-align: center;
  width: 262px;
  margin: 56px auto 0 auto;
`

export const RegisterLink = styled(StyledText)`
  font-weight: 600;
  text-decoration: underline;
`

export const TermsText = styled(StyledText)`
  color: ${({ theme }) => theme.colors.NEUTRAL_700};
`

export const BackBtn = styled(BackButton)`
  padding: 0;
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`
