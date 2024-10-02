import { useState, useEffect } from 'react'
import { useSession } from '../context/SessionProvider.js'
import { getBooksData } from '../api/books.js'

const useBooks = curIdx => {
  const { session } = useSession()
  const [books, setBooks] = useState([])
  const [page, setPage] = useState(1)
  const [doubtedBooks, setDoubtedBooks] = useState([])

  const sortBooks = fetchedBooks => {
    if (!books.length) return setBooks(fetchedBooks.concat(doubtedBooks))

    setBooks(prevBooks => prevBooks.concat(fetchedBooks).concat(doubtedBooks))
    setDoubtedBooks([])
  }

  useEffect(() => {
    if (!books) return
    if (books.length - 3 <= curIdx) {
      setPage(prevPage => prevPage + 1)
    }
  }, [curIdx])

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
