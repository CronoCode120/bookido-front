import { FlatList } from 'react-native'
import { EmptyText, ImgBackground } from './styles/BookList.js'

const BookList = ({ books, renderBook, noBooksMsg, bgImage }) => {
  return (
    <ImgBackground source={bgImage}>
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
