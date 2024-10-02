import { getFullAuthors } from '../../utils/getAuthors.js'
import { Cover } from '../styles/Cover.js'
import {
  ContentWrapper,
  Title,
  Author,
  InfoWrapper,
  Heading
} from './styles/BookDetails.js'

const BookDetails = ({ book }) => {
  const { title, author, isbn, cover } = book ?? {}
  const authorInfo = getFullAuthors(author)

  return (
    <ContentWrapper>
      <Cover src={cover} $width='30%' />
      <InfoWrapper>
        <Heading>
          <Title>{title}</Title>
          <Author>{authorInfo}</Author>
        </Heading>
      </InfoWrapper>
    </ContentWrapper>
  )
}

export default BookDetails
