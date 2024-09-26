import {
  BottomWrapper,
  Container,
  StyledButton,
  SvgWrapper,
  Title,
  Wrapper
} from './styles/Welcome'
import WelcomeImg1 from '../components/images/WelcomeImg1.jsx'

const Welcome = () => {
  return (
    <Container>
      <Wrapper>
        <Title>¿Hace cuánto que no te enamoras de un libro?</Title>
        <BottomWrapper>
          <SvgWrapper>
            <WelcomeImg1 />
          </SvgWrapper>
          <StyledButton>Siguiente</StyledButton>
        </BottomWrapper>
      </Wrapper>
    </Container>
  )
}

export default Welcome
