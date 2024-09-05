import { useEffect, useState } from 'react'
import BookItem from '../BookItem.jsx'
import AddDrawer from './AddDrawer.jsx'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BookList from '../BookList.jsx'
import { getBooksInTable } from '../../api/books.js'
import { useSession } from '../../context/SessionProvider.js'

const ReadList = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [curBook, setCurBook] = useState(null)

  const { session } = useSession()
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooksInTable(session).then(data => setBooks(data.table))
  }, [])

  const toggleDrawer = () => setDrawerVisible(!drawerVisible)

  const openDrawer = book => {
    setCurBook(book)
    toggleDrawer()
  }

  return (
    <GestureHandlerRootView>
      <BookList
        books={books}
        renderBook={isbn => (
          <BookItem isbn={isbn} action='add' onPress={openDrawer} />
        )}
      />
      <AddDrawer
        book={curBook}
        visible={drawerVisible}
        toggleDrawer={toggleDrawer}
      />
    </GestureHandlerRootView>
  )
}

export default ReadList
