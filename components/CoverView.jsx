import BookInfo from './BookInfo.jsx'
import { Cover } from './styles/CoverView.js'

const CoverView = ({ title, author, publisher }) => {
  return (
    <>
      <Cover />
      <BookInfo {...{ title, author, publisher }} />
    </>
  )
}

export default CoverView
