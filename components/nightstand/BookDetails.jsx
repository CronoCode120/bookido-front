import { getFullAuthors } from '../../utils/getAuthors.js'
import {
  ContentWrapper,
  Title,
  Cover,
  Author,
  InfoWrapper,
  DetailWrapper,
  DetailText,
  DetailTitle,
  Heading
} from './styles/BookDetails.js'

const BookDetails = ({ book }) => {
  const { title, author, isbn, cover, publisher } = book ?? {}
  const authorInfo = getFullAuthors(author)

  return (
    <ContentWrapper>
      <Cover src={cover} />
      <InfoWrapper>
        <Heading>
          <Title>{title}</Title>
          <Author>{authorInfo}</Author>
        </Heading>
        <DetailWrapper>
          <DetailText>
            <DetailTitle>ISBN</DetailTitle> {isbn}
          </DetailText>
          <DetailText>
            <DetailTitle>EDITORIAL</DetailTitle> {publisher[0]}
          </DetailText>
        </DetailWrapper>
      </InfoWrapper>
    </ContentWrapper>
  )
}

export default BookDetails