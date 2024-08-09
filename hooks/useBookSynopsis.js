import { useState, useEffect } from 'react'

const useBookSynopsis = isbn => {
  const [synopsis, setSynopsis] = useState('')

  useEffect(() => {
    getDescription(isbn)
  }, [isbn])

  const getDescription = async isbn => {
    try {
      const res = await fetch(
        'https://bookido-back.onrender.com/books/description?' +
          new URLSearchParams({ isbn }).toString()
      )
      const data = await res.json()
      setSynopsis(data.description)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  return [synopsis, setSynopsis]
}

export default useBookSynopsis
