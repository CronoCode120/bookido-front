import { useEffect, useState } from 'react'
import BookItem from '../components/BookItem.jsx'
import BookList from '../components/BookList.jsx'
import { getBooksInShelf } from '../api/books.js'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { useSession } from '../context/SessionProvider.js'
import shelfImg from '../assets/estanteria.png'

const Shelf = () => {
  const { session } = useSession()
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooksInShelf(session).then(data => setBooks(data.shelve))
  }, [])

  const handlePress = book => {
    console.log('delete ' + book.isbn[0])
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
      <BookList
        books={books}
        renderBook={isbn => (
          <BookItem isbn={isbn} action='add' onPress={handlePress} />
        )}
        noBooksMsg={'Aún no tienes libros por leer.'}
        bgImage={shelfImg}
      />
    </GestureHandlerRootView>
  )
}

export default Shelf
