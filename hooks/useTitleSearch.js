import { useState, useEffect, useRef } from 'react'
import { getBooksByTitle } from '../api/books.js'

const useTitleSearch = () => {
  const [searchTitle, setSearchTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [books, setBooks] = useState([])

  const timerRef = useRef(null)

  const retrieveBooks = () => {
    setLoading(true)
    getBooksByTitle(searchTitle).then(({ books }) => {
      setBooks(books)
      setLoading(false)
    })
  }

  const filteredBooks = suggestedBooks.filter(book =>
    book.title.includes(searchTitle)
  )

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)

    const booksRetrieved = books.length > 0
    const isFetchDone = booksRetrieved || loading

    if (!isFetchDone && searchTitle.length > 2) {
      timerRef.current = setTimeout(retrieveBooks, 2000)
    }

    if (isFetchDone && searchTitle.length <= 2) setBooks([])

    return () => clearTimeout(timerRef.current)
  }, [searchTitle])

  return { searchTitle, setSearchTitle, filteredBooks, loading }
}

export default useTitleSearch
