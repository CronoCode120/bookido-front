import { FlatList } from 'react-native'
import books from '../../books.json'
import BookItem from './BookItem.jsx'

const ReadList = () => {
  return (
    <FlatList
      data={books}
      renderItem={({ item }) => <BookItem {...item} />}
      keyExtractor={item => item.title}
      contentContainerStyle={{ gap: 14 }}
    />
  )
}

export default ReadList
