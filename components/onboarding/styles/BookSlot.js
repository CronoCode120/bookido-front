import styled from 'styled-components/native'

export const Wrapper = styled.View`
  align-self: stretch;
  padding: 14px;
  margin: 0 14px;
  border-radius: 12px;
  border: 2px dashed ${({ theme }) => theme.colors.NEUTRAL_400};
`

export const Container = styled.View`
  aspect-ratio: 10/3;
  align-self: stretch;
  height: auto;
`

export const SlotNum = styled.Text.attrs({
  adjustsFontSizeToFit: true
})``
