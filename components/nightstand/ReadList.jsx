import { useState } from 'react'
import { FlatList } from 'react-native'
import books from '../../books.json'
import BookItem from './BookItem.jsx'
import AddDrawer from './AddDrawer.jsx'

const ReadList = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [curBook, setCurBook] = useState(null)

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible)
  }

  const openDrawer = book => {
    setCurBook(book)
    toggleDrawer()
  }

  return (
    <>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <BookItem book={item} openDrawer={openDrawer} />
        )}
        keyExtractor={item => item.title}
        contentContainerStyle={{
          flex: 1,
          gap: 30,
          backgroundColor: 'white',
          paddingTop: 8
        }}
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
