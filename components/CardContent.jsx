import CoverView from './CoverView.jsx'
import DetailView from './DetailView.jsx'
import { ContentWrapper } from './styles/BookCard.js'

const CardContent = ({ pageNum, book }) => {
  return (
    <ContentWrapper>
      {(pageNum === 0 && (
        <CoverView
          title={book.title}
          author={book.author}
          publisher={book.publisher}
        />
      )) ||
        (pageNum === 1 && <DetailView />)}
    </ContentWrapper>
  )
}

export default CardContent
