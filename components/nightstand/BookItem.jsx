import { useBookSynopsis } from '../../hooks/index.js'
import getAuthors from '../../utils/getAuthors.js'
import getCoverUri from '../../utils/getCoverUri.js'
import { AddIcon } from '../icons'
import { Cover } from '../../styles.js'
import {
  AddButton,
  DetailWrapper,
  Header,
  Heading,
  InfoText,
  Synopsis,
  Title,
  Wrapper
} from './styles/BookItem.js'
import { Shadow } from 'react-native-shadow-2'

const BookItem = ({ book, openDrawer }) => {
  const { title, author, isbn } = book
  const authorInfo = getAuthors(author)
  const isbnStr = isbn ? isbn[0] : 'Desconocido'
  const coverUri = getCoverUri(isbnStr)
  const [synopsis] = useBookSynopsis(isbnStr)

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
          <AddButton
            onPress={() =>
              openDrawer({ ...book, cover: coverUri, isbn: isbnStr })
            }
          >
            <AddIcon />
          </AddButton>
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
