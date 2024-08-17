import { useState } from 'react'
import { FlatList } from 'react-native'
import books from '../../books.json'
import BookItem from './BookItem.jsx'
import AddDrawer from './AddDrawer.jsx'

const ReadList = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [curBook, setCurBook] = useState(null)

  const toggleDrawer = book => {
    setCurBook(book)
    setDrawerVisible(!drawerVisible)
  }

  return (
    <>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <BookItem book={item} toggleDrawer={toggleDrawer} />
        )}
        keyExtractor={item => item.title}
        contentContainerStyle={{ gap: 14 }}
      />
      <AddDrawer
        book={curBook}
        visible={drawerVisible}
        toggleDrawer={toggleDrawer}
      />
    </>
  )
}

export default ReadList
