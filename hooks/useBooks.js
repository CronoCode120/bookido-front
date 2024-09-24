import { useState, useEffect } from 'react'
import { useSession } from '../context/SessionProvider.js'
import { getBooksData } from '../api/books.js'

const useBooks = page => {
  const { session } = useSession()
  const [books, setBooks] = useState([])
  const [doubtedBooks, setDoubtedBooks] = useState([])

  const sortBooks = fetchedBooks => {
    if (!books.length) return setBooks(fetchedBooks.concat(doubtedBooks))

    setBooks(prevBooks => prevBooks.concat(fetchedBooks).concat(doubtedBooks))
    setDoubtedBooks([])
  }

  useEffect(() => {
    getBooksData(page, session)
      .then(data => sortBooks(data.books))
      .catch(err => console.log(err))
  }, [page])

  const saveForLater = book =>
    setDoubtedBooks(prevBooks => [...prevBooks, book])

  return { books, saveForLater }
}

export default useBooks
