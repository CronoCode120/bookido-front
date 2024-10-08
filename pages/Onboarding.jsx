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
import DropdownItem from '../components/onboarding/DropdownItem.jsx'
import { FlatList } from 'react-native'

const Onboarding = () => {
  const { searchTitle, setSearchTitle, filteredBooks, loading } =
    useTitleSearch()

  const renderBook = ({ item }) => {
    const publisher = item.publisher
      ? item.publisher[0]
      : 'Editorial desconocida'
    return <DropdownItem title={item.title} publisher={publisher} />
  }

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
        {filteredBooks?.length > 0 && (
          <DropdownList>
            <FlatList
              data={filteredBooks}
              renderItem={renderBook}
              keyExtractor={({ item }) => item?.isbn[0]}
              contentContainerStyle={{
                backgroundColor: 'transparent',
                overflow: 'scroll',
                alignSelf: 'stretch'
              }}
            />
          </DropdownList>
        )}
      </TopWrapper>
      <StyledButton>Siguiente</StyledButton>
    </Container>
  )
}

export default Onboarding
