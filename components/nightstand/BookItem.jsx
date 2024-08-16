import books from '../../books.json'
import getAuthors from '../../utils/getAuthors.js'
import getCoverUri from '../../utils/getCoverUri.js'
import { useBookSynopsis } from '../../hooks/index.js'
import AddIcon from '../svg/AddIcon.jsx'
import {
  AddButton,
  Cover,
  DetailWrapper,
  Heading,
  InfoText,
  Synopsis,
  Title,
  Wrapper
} from './styles/BookItem.js'
import { View } from 'react-native'

const BookItem = () => {
  const { title, author, isbn } = books[0]
  const authorInfo = getAuthors(author)
  const isbnStr = isbn ? isbn[0] : ''
  const coverUri = getCoverUri(isbnStr)
  const [synopsis] = useBookSynopsis(isbnStr)

  return (
    <Wrapper>
      <Heading>
        <View>
          <Title>{title}</Title>
          <InfoText>{authorInfo}</InfoText>
        </View>
        <AddButton>
          <AddIcon />
        </AddButton>
      </Heading>
      <DetailWrapper>
        <Cover src={coverUri} />
        <Synopsis numberOfLines={4}>{synopsis}</Synopsis>
      </DetailWrapper>
    </Wrapper>
  )
}

export default BookItem
