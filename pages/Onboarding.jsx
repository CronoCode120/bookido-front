import { useEffect, useState } from 'react'
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
import { getBooksByTitle } from '../api/books.js'

const Onboarding = () => {
  const [searchTitle, setSearchTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [suggestedBooks, setSuggestedBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])

  useEffect(() => {
    const booksRetrieved = suggestedBooks.length > 0
    const isFetchDone = booksRetrieved || loading

    if (booksRetrieved) {
      const filteredBooks = suggestedBooks.filter(book =>
        book.title.includes(searchTitle)
      )
      setFilteredBooks(filteredBooks)
    }

    if (!isFetchDone && searchTitle.length > 2) {
      setLoading(true)
      getBooksByTitle(searchTitle).then(({ books }) => {
        setSuggestedBooks(books)
        setLoading(false)
      })
    }
  }, [searchTitle])

  useEffect(() => console.log('suggested: ', filteredBooks), [filteredBooks])

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
