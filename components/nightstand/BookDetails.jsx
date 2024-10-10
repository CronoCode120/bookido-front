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
  const { title, cover } = book ?? {}
  const authorInfo = getFullAuthors(book?.author ?? book?.authors)

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
