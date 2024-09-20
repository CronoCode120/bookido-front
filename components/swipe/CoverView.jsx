import BookInfo from './BookInfo.jsx'
import { CoverWrapper } from './styles/CoverView.js'
import getCoverUri from '../../utils/getCoverUri.js'

const CoverView = ({ title, author, publisher, isbn }) => {
  const cover = getCoverUri(isbn, 'L')
  return (
    <CoverWrapper src={cover} alt={'Portada de ' + title}>
      <BookInfo {...{ title, author, publisher }} />
    </CoverWrapper>
  )
}

export default CoverView
