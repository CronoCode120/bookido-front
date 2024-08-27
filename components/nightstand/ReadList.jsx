import { useState } from 'react'
import { FlatList } from 'react-native'
import books from '../../books.json'
import BookItem from './BookItem.jsx'
import AddDrawer from './AddDrawer.jsx'

import { Stack } from 'expo-router'
import NavHeader from '../NavHeader.jsx'

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
      <Stack.Screen
        options={{
          headerLeft: () => <NavHeader title='Mesita de noche' />
        }}
      />
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <BookItem book={item} openDrawer={openDrawer} />
        )}
        keyExtractor={item => item.title}
        contentContainerStyle={{ gap: 30 }}
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
