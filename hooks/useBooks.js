import { useState, useEffect } from 'react'

const useBooks = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    try {
      const res = await fetch('https://bookido-back.onrender.com/books')
      const data = await res.json()

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
