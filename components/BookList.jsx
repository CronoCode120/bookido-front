import { FlatList } from 'react-native'

const BookList = ({ books, renderBook }) => {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => renderBook(item)}
      keyExtractor={item => item}
      contentContainerStyle={{
        alignSelf: 'stretch',
        gap: 30,
        backgroundColor: 'white',
        paddingVertical: 8,
        overflow: 'auto'
      }}
    />
  )
}

export default BookList
