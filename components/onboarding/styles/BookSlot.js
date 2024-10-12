import styled from 'styled-components/native'

export const Wrapper = styled.View`
  align-self: stretch;
  padding: 12px;
  border-radius: 12px;
  border: 2px dashed ${({ theme }) => theme.colors.NEUTRAL_400};
`

export const Container = styled.View`
  aspect-ratio: 10/3;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  height: auto;
`

export const SlotNum = styled.Text.attrs({
  adjustsFontSizeToFit: true
})`
  color: ${({ theme }) => theme.colors.NEUTRAL_400};
  text-align: center;
  font-size: 80px;
`
