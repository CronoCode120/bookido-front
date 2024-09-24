import styled from 'styled-components/native'

export const Cover = styled.Image`
  aspect-ratio: 1/1.5;
  width: ${({ $width }) => $width};
  max-width: 200px;
  height: auto;
  border-radius: 6px;
`
