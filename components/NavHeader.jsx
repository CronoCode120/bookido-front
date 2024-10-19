import styled from 'styled-components/native'
import BackButton from './BackButton.jsx'
import { getWidthPercent } from '../utils/dimensions.js'

const NavHeader = ({ title }) => {
  return (
    <Wrapper>
      <BackButton />
      {title && <Title>{title}</Title>}
    </Wrapper>
  )
}

export default NavHeader

const Title = styled.Text.attrs({
  numberOfLines: 1
})`
  font-size: 20px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.HEADING};
  max-width: ${getWidthPercent(85)};
`

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 8px 0;
  width: 100%;
`
