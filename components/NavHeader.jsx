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
  font-size: 22px;
  font-weight: 400;
`

const Wrapper = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
  padding: 4px 0;
`
