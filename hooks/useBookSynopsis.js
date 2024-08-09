import { useState, useEffect } from 'react'
import { getSynopsisByISBN } from '../api/books.js'

const useBookSynopsis = isbn => {
  const [synopsis, setSynopsis] = useState('')

  useEffect(() => {
    getDescription(isbn)
  }, [isbn])

  const getDescription = async isbn => {
    try {
      const data = await getSynopsisByISBN(isbn)
      setSynopsis(data.description)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  return [synopsis, setSynopsis]
}

export default useBookSynopsis
