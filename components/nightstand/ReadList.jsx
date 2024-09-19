import { useCallback, useState } from 'react'
import BookItem from '../BookItem.jsx'
import BookList from '../BookList.jsx'
import AddDrawer from './AddDrawer.jsx'
import { getBooksInTable } from '../../api/books.js'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { useFocusEffect } from 'expo-router'
import { useSession } from '../../context/SessionProvider.js'
import { useModal } from '../../context/ModalProvider.js'
import standImg from '../../assets/mesita.png'

const ReadList = () => {
  const [curBook, setCurBook] = useState(null)

  const { session, updateStand, setUpdateStand } = useSession()
  const [books, setBooks] = useState([])

  const fetchBooks = () =>
    getBooksInTable(session).then(data => setBooks(data.table))

  useFocusEffect(
    useCallback(() => {
      fetchBooks()
      setUpdateStand(false)
    }, [updateStand])
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
          <BookItem isbn={isbn} action='add' onPress={openDrawer} />
        )}
        noBooksMsg={'Aún no tienes libros por leer.'}
        bgImage={standImg}
      />
      <AddDrawer book={curBook} />
    </GestureHandlerRootView>
  )
}

export default ReadList
