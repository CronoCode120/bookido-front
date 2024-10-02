import { useCallback, useState } from 'react'
import BookItem from '../components/BookItem.jsx'
import BookList from '../components/BookList.jsx'
import OptionsDrawer from '../components/shelf/OptionsDrawer.jsx'
import { getBooksInShelf } from '../api/books.js'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { useFocusEffect } from 'expo-router'
import { useSession } from '../context/SessionProvider.js'
import { useModal } from '../context/ModalProvider.js'
import shelfImg from '../assets/estanteria.png'
import { DotsIcon } from '../components/icons'

const Shelf = () => {
  const [curBook, setCurBook] = useState(null)

  const { session, updateShelf, setUpdateShelf } = useSession()
  const [books, setBooks] = useState([])

  const fetchBooks = () =>
    getBooksInShelf(session).then(data => setBooks(data.shelve))

  useFocusEffect(
    useCallback(() => {
      fetchBooks()
      setUpdateShelf(false)
    }, [updateShelf])
  )

  const { toggleVisible } = useModal()
  const openDrawer = book => {
    setCurBook(book)
    toggleVisible()
  }

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'white' }}>
      <BookList
        books={books}
        renderBook={isbn => (
          <BookItem isbn={isbn} Icon={DotsIcon} onPress={openDrawer} />
        )}
        noBooksMsg={'Aún no tienes libros por leer.'}
        bgImage={shelfImg}
      />
      <OptionsDrawer book={curBook} />
    </GestureHandlerRootView>
  )
}

export default Shelf
