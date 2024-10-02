import { useBookISBN, useBookSynopsis } from '../hooks/index.js'
import getAuthors from '../utils/getAuthors.js'
import getCoverUri from '../utils/getCoverUri.js'
import { Cover } from './styles/Cover.js'
import {
  ActionButton,
  DetailWrapper,
  Header,
  Heading,
  InfoText,
  Synopsis,
  Title,
  Wrapper
} from './styles/BookItem.js'
import { Shadow } from 'react-native-shadow-2'

const BookItem = ({ isbn, onPress, Icon }) => {
  const book = useBookISBN(isbn, ['title', 'author']) ?? {}
  const authorInfo = getAuthors(book.author)
  const coverUri = getCoverUri(isbn)
  const [synopsis] = useBookSynopsis(isbn)

  return (
    <Shadow
      distance={2}
      offset={[0, 2]}
      style={{ borderRadius: 12 }}
      containerStyle={{ marginHorizontal: 14 }}
    >
      <Wrapper>
        <Header>
          <Heading>
            <Title numberOfLines={1}>{book.title}</Title>
            <InfoText>{authorInfo}</InfoText>
          </Heading>
          <ActionButton
            onPress={() => onPress({ ...book, isbn, cover: coverUri })}
          >
            <Icon />
          </ActionButton>
        </Header>
        <DetailWrapper>
          <Cover src={coverUri} $width='20%' />
          <Synopsis numberOfLines={4}>{synopsis}</Synopsis>
        </DetailWrapper>
      </Wrapper>
    </Shadow>
  )
}

export default BookItem
