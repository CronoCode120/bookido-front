import {
  ButtonWrapper,
  Container,
  MainWrapper,
  StyledButton,
  SvgWrapper,
  Title,
  Wrapper
} from './styles/Welcome'
import WelcomeImg1 from '../components/images/WelcomeImg1.jsx'
import PageIndicator from '../components/PageIndicator.jsx'

const Welcome = () => {
  return (
    <Container>
      <Wrapper>
        <MainWrapper>
          <Title>¿Hace cuánto que no te enamoras de un libro?</Title>
          <SvgWrapper>
            <WelcomeImg1 />
          </SvgWrapper>
        </MainWrapper>
        <ButtonWrapper>
          <StyledButton>Siguiente</StyledButton>
          <PageIndicator />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}

export default Welcome
