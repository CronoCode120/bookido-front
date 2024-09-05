import { useState } from 'react'
import books from '../../books.json'
import BookItem from '../BookItem.jsx'
import AddDrawer from './AddDrawer.jsx'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import BookList from '../BookList.jsx'

const ReadList = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [curBook, setCurBook] = useState(null)

  const toggleDrawer = () => setDrawerVisible(!drawerVisible)

  const openDrawer = book => {
    setCurBook(book)
    toggleDrawer()
  }

  return (
    <GestureHandlerRootView>
      <BookList
        books={books}
        renderBook={book => (
          <BookItem book={book} action='add' onPress={openDrawer} />
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
