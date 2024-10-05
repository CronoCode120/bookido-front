import SearchIcon from '../components/icons/SearchIcon.jsx'
import {
  Container,
  SearchInput,
  SearchWrapper,
  Title,
  StyledButton,
  TopWrapper,
  ProgressBar,
  Progress,
  LoadIndicator
} from './styles/Onboarding'
import useTitleSearch from '../hooks/useTitleSearch.js'

const Onboarding = () => {
  const { searchTitle, setSearchTitle, filteredBooks, loading } =
    useTitleSearch()

  return (
    <Container>
      <TopWrapper>
        <ProgressBar>
          <Progress />
        </ProgressBar>
        <Title>Dinos tus tres libros favoritos</Title>
        <SearchWrapper>
          <SearchInput value={searchTitle} onChangeText={setSearchTitle} />
          {loading ? <LoadIndicator /> : <SearchIcon />}
        </SearchWrapper>
      </TopWrapper>
      <StyledButton>Siguiente</StyledButton>
    </Container>
  )
}

export default Onboarding
