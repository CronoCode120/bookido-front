import CoverView from './CoverView.jsx'
import DetailView from './DetailView.jsx'
import ReviewsView from './ReviewsView.jsx'
import { ContentWrapper } from './styles/BookCard.js'

const CardContent = ({ pageNum, book }) => {
  const { title, authors, publisher, synopsis, isbn, cover } = book

  return (
    <ContentWrapper>
      {(pageNum === 0 && <CoverView isbn={isbn ? isbn : ''} cover={cover} />) ||
        (pageNum === 1 && (
          <DetailView
            title={title}
            author={authors}
            publisher={publisher}
            synopsis={synopsis}
          />
        )) ||
        (pageNum === 2 && <ReviewsView />)}
    </ContentWrapper>
  )
}

export default CardContent
