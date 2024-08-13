import getAuthors from '../../utils/getAuthors.js'
import { Container, InfoText, Title } from '../styles/BookInfo.js'

const BookInfo = ({ title, author, publisher }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InfoText>{getAuthors(author)}</InfoText>
      <InfoText>{publisher}</InfoText>
    </Container>
  )
}

export default BookInfo
