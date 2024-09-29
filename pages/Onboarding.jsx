import SearchIcon from '../components/icons/SearchIcon.jsx'
import {
  Container,
  SearchInput,
  SearchWrapper,
  Title,
  StyledButton,
  TopWrapper,
  ProgressBar,
  Progress
} from './styles/Onboarding'

const Onboarding = () => {
  return (
    <Container>
      <TopWrapper>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <Title>Dinos tus tres libros favoritos</Title>
        <SearchWrapper>
          <SearchInput />
          <SearchIcon />
        </SearchWrapper>
      </TopWrapper>
      <StyledButton>Siguiente</StyledButton>
    </Container>
  )
}

export default Onboarding
