import { Container, InfoText, Title } from '../styles/BookInfo.js'

const BookInfo = ({ title, author, publisher }) => {
  const getAuthors = () => {
    const length = author?.length
    if (length >= 3) return `${author[0]} y ${length - 1} más`
    if (length === 2) return author.join(' y ')
    if (length === 1) return author[0]
    return 'Sin información del autor'
  }

  return (
    <Container>
      <Title>{title}</Title>
      <InfoText>{getAuthors()}</InfoText>
      <InfoText>{publisher}</InfoText>
    </Container>
  )
}

export default BookInfo
