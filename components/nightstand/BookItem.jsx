import { Image, Text, View } from 'react-native'
import books from '../../books.json'
import getAuthors from '../../utils/getAuthors.js'
import getCoverUri from '../../utils/getCoverUri.js'
import { useBookSynopsis } from '../../hooks/index.js'

const BookItem = () => {
  const { title, author, isbn } = books[0]
  const authorInfo = getAuthors(author)
  const isbnStr = isbn ? isbn[0] : ''
  const coverUri = getCoverUri(isbnStr)
  const [synopsis] = useBookSynopsis(isbnStr)

  return (
    <View>
      <Text>{title}</Text>
      <Text>{authorInfo}</Text>
      <View>
        <Image src={coverUri} />
        <Text>{synopsis}</Text>
      </View>
    </View>
  )
}

export default BookItem
