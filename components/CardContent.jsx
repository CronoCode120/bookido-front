import CoverView from './CoverView.jsx'
import DetailView from './DetailView.jsx'
import { ContentWrapper } from './styles/BookCard.js'

const CardContent = ({ pageNum }) => {
  return (
    <ContentWrapper>
      {(pageNum === 0 && <CoverView />) || (pageNum === 1 && <DetailView />)}
    </ContentWrapper>
  )
}

export default CardContent
