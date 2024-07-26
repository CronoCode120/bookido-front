import CoverView from './CoverView.jsx'
import DetailView from './DetailView.jsx'
import { ContentWrapper } from './styles/BookCard.js'

const CardContent = ({ pageNum, book }) => {
  const {
    title,
    author,
    publisher,
    isbn: [isbn]
  } = book
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
        (pageNum === 1 && <DetailView />)}
    </ContentWrapper>
  )
}

export default CardContent
