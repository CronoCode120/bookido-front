import { useEffect, useState } from 'react'
import { getBookByISBN } from '../api/books.js'

const useBookISBN = (isbn, fields) => {
  const [book, setBook] = useState(null)

  const fieldsStr = fields.join(',')

  useEffect(() => {
    getBookByISBN(isbn, fieldsStr).then(data => setBook(data.book))
  }, [])

  return [book, setBook]
}

export default useBookISBN
