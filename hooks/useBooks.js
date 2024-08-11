import { useState, useEffect } from 'react'
import { getBooksData } from '../api/books.js'

const useBooks = page => {
  const [books, setBooks] = useState([])

  const sortBooks = fetchedBooks => {
    if (!books.length) return setBooks(fetchedBooks)

    setBooks(prevBooks => prevBooks.concat(fetchedBooks))
  }

  useEffect(() => {
    getBooksData(page)
      .then(data => sortBooks(data.books))
      .catch(err => console.log(err))
  }, [page])

  return [books, setBooks]
}

export default useBooks
