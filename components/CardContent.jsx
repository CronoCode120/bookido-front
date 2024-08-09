import CoverView from './CoverView.jsx'
import DetailView from './DetailView.jsx'
import useBookSynopsis from '../hooks/useBookSynopsis.js'
import { ContentWrapper } from './styles/BookCard.js'

const CardContent = ({ pageNum, book }) => {
  const {
    title,
    author,
    publisher,
    isbn: [isbn]
  } = book

  const [synopsis] = useBookSynopsis(isbn)

  return (
    <ContentWrapper>
      {(pageNum === 0 && (
        <CoverView
          title={title}
          author={author}
          publisher={publisher[0]}
          isbn={isbn}
        />
      )) ||
        (pageNum === 1 && <DetailView synopsis={synopsis} />)}
    </ContentWrapper>
  )
}

export default CardContent
