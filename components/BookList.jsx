import { FlatList } from 'react-native'

const BookList = ({ books, renderBook }) => {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => renderBook(item)}
      keyExtractor={item => item.title}
      contentContainerStyle={{
        flex: 1,
        gap: 30,
        backgroundColor: 'white',
        paddingTop: 8
      }}
    />
  )
}

export default BookList
