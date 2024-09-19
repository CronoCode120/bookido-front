import { FlatList } from 'react-native'
import { EmptyText, ImgBackground } from './styles/BookList.js'
import standImg from '../assets/mesita.png'

const BookList = ({ books, renderBook, noBooksMsg }) => {
  return (
    <ImgBackground source={standImg}>
      {books.length ? (
        <FlatList
          data={books}
          renderItem={({ item }) => renderBook(item)}
          keyExtractor={item => item}
          contentContainerStyle={{
            alignSelf: 'stretch',
            gap: 30,
            background: 'transparent',
            paddingVertical: 8,
            overflow: 'auto'
          }}
        />
      ) : (
        <EmptyText>{noBooksMsg}</EmptyText>
      )}
    </ImgBackground>
  )
}

export default BookList
