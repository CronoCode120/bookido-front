import styled from 'styled-components/native'

export const Container = styled.View`
  border: 1px solid black;
  height: 500px;
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  background: #e2e8f066;
  justify-content: space-between;
`

export const MainWrapper = styled.View`
  flex: 1;
  gap: 24px;
`

export const Header = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const HeadingWrapper = styled.View`
  width: 80%;
`

export const StyledText = styled.Text`
  font-size: 16px;
`

export const Heading = styled(StyledText)`
  font-weight: 600;
`

export const RatingWrapper = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`

export const RateBtn = styled.Pressable`
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 6px;
  width: 90px;
`

export const RateText = styled.Text`
  font-weight: 600;
  font-size: 14px;
`

export const Input = styled.TextInput.attrs({
  multiline: true,
  numberOfLines: 6,
  cursorColor: '#94a3b8',
  selectionColor: '#94a3b8',
  textAlignVertical: 'top'
})`
  align-self: stretch;
  height: 120px;
  border: 0.8px solid #94a3b8;
  border-radius: 8px;
  padding: 10px;
`
