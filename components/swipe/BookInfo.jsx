import { Text } from 'react-native'
import getAuthors from '../../utils/getAuthors.js'
import { Author, Container, Title } from './styles/BookInfo.js'

const BookInfo = ({ title, author, publisher }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>{getAuthors(author)}</Author>
      <Text>{publisher}</Text>
    </Container>
  )
}

export default BookInfo
