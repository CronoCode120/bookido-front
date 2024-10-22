import styled from 'styled-components/native'

export const Container = styled.View`
  height: 500px;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  background: #e2e8f066;
  justify-content: space-between;
`

export const MainWrapper = styled.View`
  flex: 1;
`

export const Header = styled.View`
  flex-direction: row;
  gap: 20px;
  margin-bottom: 24px;
`

export const HeadingWrapper = styled.View`
  width: 80%;
`

export const StyledText = styled.Text`
  font-size: 16px;
`

export const Heading = styled(StyledText)`
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
`

export const SectionTitle = styled(StyledText)`
  margin-bottom: 12px;
`

export const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 48px;
`

export const RateBtn = styled.Pressable`
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  width: 90px;
`

export const RateText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.BODY_BOLD};
`

export const Input = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 6,
  cursorColor: 'black',
  selectionColor: '#1F1F1F44',
  textAlignVertical: 'top'
})`
  align-self: stretch;
  height: 120px;
  border: 0.8px solid #94a3b8;
  border-radius: 8px;
  padding: 10px;
  background: white;
`
