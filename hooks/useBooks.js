import { useState, useEffect } from 'react'
import { useSession } from '../context/SessionProvider.js'
import { getBooksData } from '../api/books.js'

const useBooks = page => {
  const { session } = useSession()
  const [books, setBooks] = useState([])

  const sortBooks = fetchedBooks => {
    if (!books.length) return setBooks(fetchedBooks)

    setBooks(prevBooks => prevBooks.concat(fetchedBooks))
  }

  useEffect(() => {
    getBooksData(page, session)
      .then(data => sortBooks(data.books))
      .catch(err => console.log(err))
  }, [page])

  return [books, setBooks]
}

export default useBooks
