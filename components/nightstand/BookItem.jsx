import { useBookSynopsis } from '../../hooks/index.js'
import getAuthors from '../../utils/getAuthors.js'
import getCoverUri from '../../utils/getCoverUri.js'
import AddIcon from '../svg/AddIcon.jsx'
import {
  AddButton,
  Cover,
  DetailWrapper,
  Header,
  Heading,
  InfoText,
  Synopsis,
  Title,
  Wrapper
} from './styles/BookItem.js'

const BookItem = ({ book, openDrawer }) => {
  const { title, author, isbn } = book
  const authorInfo = getAuthors(author)
  const isbnStr = isbn ? isbn[0] : 'Desconocido'
  const coverUri = getCoverUri(isbnStr)
  const [synopsis] = useBookSynopsis(isbnStr)

  return (
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
        <Cover src={coverUri} />
        <Synopsis numberOfLines={4}>{synopsis}</Synopsis>
      </DetailWrapper>
    </Wrapper>
  )
}

export default BookItem
