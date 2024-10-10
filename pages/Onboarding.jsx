import { useState } from 'react'
import { FlatList } from 'react-native'
import { useTitleSearch } from '../hooks'
import DropdownItem from '../components/onboarding/DropdownItem.jsx'
import BookItem from '../components/BookItem.jsx'
import { SearchIcon, CrossIcon } from '../components/icons'
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
  DropdownList,
  Separator
} from './styles/Onboarding'

const Onboarding = () => {
  const { searchTitle, setSearchTitle, filteredBooks, loading } =
    useTitleSearch()

  const [favBooks, setFavBooks] = useState([])

  const addFav = book => {
    if (favBooks.includes(book)) return
    setFavBooks(prevBooks => [...prevBooks, book])
    setSearchTitle('')
  }

  const removeFav = removedIsbn => () =>
    setFavBooks(prevBooks => prevBooks.filter(isbn => isbn === removedIsbn))

  const renderBook =
    addBook =>
    ({ item }) => {
      const publisher = item.publisher || 'Editorial desconocida'
      return (
        <DropdownItem
          title={item.title}
          publisher={publisher}
          onPress={() => addBook(item.isbn)}
        />
      )
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
              renderItem={renderBook(addFav)}
              keyExtractor={({ item }) => item?.isbn[0]}
              contentContainerStyle={{
                backgroundColor: 'transparent',
                overflow: 'scroll',
                alignSelf: 'stretch'
              }}
              ItemSeparatorComponent={Separator}
            />
          </DropdownList>
        )}
      </TopWrapper>
      {favBooks.map(isbn => (
        <BookItem isbn={isbn} onPress={removeFav(isbn)} Icon={CrossIcon} />
      ))}
      <StyledButton>Siguiente ({favBooks.length}/3)</StyledButton>
    </Container>
  )
}

export default Onboarding
