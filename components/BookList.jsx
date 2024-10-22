import { ActivityIndicator, FlatList, View } from 'react-native'
import { EmptyText, ImgBackground } from './styles/BookList.js'

const BookList = ({ books, loading, renderBook, noBooksMsg, bgImage }) => {
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
      ) : loading ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size='large' color='black' />
        </View>
      ) : (
        <EmptyText>{noBooksMsg}</EmptyText>
      )}
    </ImgBackground>
  )
}

export default BookList
