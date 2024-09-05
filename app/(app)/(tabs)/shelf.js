import { useEffect, useState } from 'react'
import { Text } from 'react-native'
import BookItem from '../../../components/BookItem.jsx'
import BookList from '../../../components/BookList.jsx'
import Screen from '../../../components/Screen.jsx'
import { getBooksInShelf } from '../../../api/books.js'

import { useSession } from '../../../context/SessionProvider.js'

const Shelf = () => {
  const { session } = useSession()
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooksInShelf(session).then(data => setBooks(data.shelf))
  }, [])

  const handlePress = book => {
    console.log('delete ' + book.isbn[0])
  }

  return (
    <Screen>
      {books?.length ? (
        <BookList
          books={books}
          renderBook={isbn => (
            <BookItem isbn={isbn} action='delete' onPress={handlePress} />
          )}
        />
      ) : (
        <Text>Tu estantería está vacía.</Text>
      )}
    </Screen>
  )
}

export default Shelf
