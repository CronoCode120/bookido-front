import { useState, useEffect } from 'react'
import { getBooksData } from '../api/books.js'

const useBooks = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    try {
      const data = await getBooksData()

      setBooks(data.books)
      console.log(data.books[0])
    } catch (error) {
      console.log(error)
      return <Text>Ha ocurrido un error</Text>
    }
  }

  return [books, setBooks]
}

export default useBooks
