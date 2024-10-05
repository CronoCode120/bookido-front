import { useState, useEffect } from 'react'
import { getBooksByTitle } from '../api/books.js'

const useTitleSearch = () => {
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

  return { searchTitle, setSearchTitle, filteredBooks, loading }
}

export default useTitleSearch
