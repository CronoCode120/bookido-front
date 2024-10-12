import { useState } from 'react'
import { FlatList } from 'react-native'
import { useTitleSearch } from '../hooks'
import DropdownItem from '../components/onboarding/DropdownItem.jsx'
import BookItem from '../components/BookItem.jsx'
import BookSlot from '../components/onboarding/BookSlot.jsx'
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
  Separator,
  BooksWrapper,
  SlotsWrapper
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
    setFavBooks(prevBooks => prevBooks.filter(isbn => isbn !== removedIsbn))

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

  const BOOK_NUM = 3

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
              keyExtractor={item => item?.isbn}
              contentContainerStyle={{
                backgroundColor: 'transparent',
                overflow: 'scroll',
                alignSelf: 'stretch'
              }}
              ItemSeparatorComponent={Separator}
              keyboardShouldPersistTaps='always'
            />
          </DropdownList>
        )}
      </TopWrapper>
      <BooksWrapper>
        <SlotsWrapper>
          <BookSlot num={1} />
          <BookSlot num={2} />
          <BookSlot num={3} />
        </SlotsWrapper>
        <FlatList
          data={favBooks}
          renderItem={({ item }) => (
            <BookItem isbn={item} onPress={removeFav(item)} Icon={CrossIcon} />
          )}
          keyExtractor={item => item}
          contentContainerStyle={{
            flex: 1,
            gap: 20
          }}
        />
      </BooksWrapper>
      <StyledButton disabled={favBooks.length / BOOK_NUM !== 1}>
        Siguiente ({favBooks.length}/{BOOK_NUM})
      </StyledButton>
    </Container>
  )
}

export default Onboarding
