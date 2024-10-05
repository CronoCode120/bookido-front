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
  LoadIndicator,
  DropdownList
} from './styles/Onboarding'
import useTitleSearch from '../hooks/useTitleSearch.js'
import { Text } from 'react-native'

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
          <DropdownList
            data={filteredBooks}
            renderItem={({ item }) => <Text>{item.title}</Text>}
            keyExtractor={({ item }) => item?.isbn[0]}
          />
        </SearchWrapper>
      </TopWrapper>
      <StyledButton>Siguiente</StyledButton>
    </Container>
  )
}

export default Onboarding
