import styled from 'styled-components/native'
import BackButton from './BackButton.jsx'

const NavHeader = ({ title }) => {
  return (
    <Wrapper>
      <BackButton />
      {title && <Title>{title}</Title>}
    </Wrapper>
  )
}

export default NavHeader

const Title = styled.Text`
  font-size: 20px;
  font-weight: 400;
  font-family: ${({ theme }) => theme.fonts.HEADING};
`

const Wrapper = styled.View`
  gap: 6px;
  padding: 8px 0 0 0;
`
