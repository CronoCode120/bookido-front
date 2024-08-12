import { useState, useEffect } from 'react'
import { getSynopsisByISBN } from '../api/books.js'

const useBookSynopsis = isbn => {
  const [synopsis, setSynopsis] = useState('')

  useEffect(() => {
    getSynopsisByISBN(isbn)
      .then(data => setSynopsis(data.description))
      .catch(err => console.log(err))
  }, [isbn])

  return [synopsis, setSynopsis]
}

export default useBookSynopsis
