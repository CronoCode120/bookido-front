import {
  Container,
  Image,
  StyledButton,
  Title,
  Wrapper
} from './styles/Welcome.js'

const Welcome = () => {
  return (
    <Container>
      <Wrapper>
        <Title>¿Hace cuánto que no te enamoras de un libro?</Title>
        <Image />
        <StyledButton>Siguiente</StyledButton>
      </Wrapper>
    </Container>
  )
}

export default Welcome
