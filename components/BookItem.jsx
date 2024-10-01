import { useBookISBN } from '../hooks/index.js'
import getAuthors from '../utils/getAuthors.js'
import getCoverUri from '../utils/getCoverUri.js'
import { AddIcon, CrossIcon } from './icons/index.js'
import { Cover } from './styles/Cover.js'
import {
  ActionButton,
  Heading,
  InfoText,
  Title,
  Wrapper
} from './styles/BookItem.js'
import { Shadow } from 'react-native-shadow-2'

const BookItem = ({ isbn, onPress, action }) => {
  const book = useBookISBN(isbn, ['title', 'author']) ?? {}
  const authorInfo = getAuthors(book.author)
  const coverUri = getCoverUri(isbn)

  return (
    <Shadow
      distance={6}
      offset={[0, 2]}
      style={{ borderRadius: 12 }}
      containerStyle={{ marginHorizontal: 14 }}
    >
      <Wrapper>
        <Cover src={coverUri} $width='15%' />
        <Heading>
          <Title numberOfLines={1}>{book.title}</Title>
          <InfoText>{authorInfo}</InfoText>
        </Heading>
        <ActionButton
          onPress={() => onPress({ ...book, isbn, cover: coverUri })}
        >
          {action === 'add' && <AddIcon />}
          {action === 'delete' && <CrossIcon />}
        </ActionButton>
      </Wrapper>
    </Shadow>
  )
}

export default BookItem
