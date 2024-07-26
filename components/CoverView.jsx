import BookInfo from './BookInfo.jsx'
import { Cover } from './styles/CoverView.js'
import getCoverUri from '../utils/getCoverUri.js'

const CoverView = ({ title, author, publisher, isbn }) => {
  const cover = getCoverUri(isbn)
  return (
    <>
      <Cover src={cover} />
      <BookInfo {...{ title, author, publisher }} />
    </>
  )
}

export default CoverView
