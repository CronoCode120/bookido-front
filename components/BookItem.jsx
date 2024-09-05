import { useBookSynopsis } from '../hooks/index.js'
import getAuthors from '../utils/getAuthors.js'
import getCoverUri from '../utils/getCoverUri.js'
import { AddIcon, CrossIcon } from './icons/index.js'
import { Cover } from '../styles/Cover.js'
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

const BookItem = ({ book, onPress, action }) => {
  const { title, author, isbn } = book
  const authorInfo = getAuthors(author)
  const isbnStr = isbn ? isbn[0] : 'Desconocido'
  const coverUri = getCoverUri(isbnStr)
  const [synopsis] = useBookSynopsis(isbnStr)
  console.log(synopsis)

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
            <Title>{title}</Title>
            <InfoText>{authorInfo}</InfoText>
          </Heading>
          <ActionButton
            onPress={() => onPress({ ...book, isbn: isbnStr, cover: coverUri })}
          >
            {action === 'add' && <AddIcon />}
            {action === 'delete' && <CrossIcon />}
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
