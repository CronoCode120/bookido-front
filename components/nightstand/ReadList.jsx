import { useState } from 'react'
import { FlatList } from 'react-native'
import books from '../../books.json'
import BookItem from './BookItem.jsx'
import AddDrawer from './AddDrawer.jsx'

const ReadList = () => {
  const [drawerVisible, setDrawerVisible] = useState(false)

  const toggleDrawer = () => setDrawerVisible(!drawerVisible)

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
      <AddDrawer visible={drawerVisible} toggleDrawer={toggleDrawer} />
    </>
  )
}

export default ReadList
