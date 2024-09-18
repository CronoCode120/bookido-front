import { FlatList } from 'react-native'
import { ImgBackground } from './styles/BookList.js'
import standImg from '../assets/mesita.png'

const BookList = ({ books, renderBook }) => {
  return (
    <ImgBackground source={standImg}>
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
    </ImgBackground>
  )
}

export default BookList
