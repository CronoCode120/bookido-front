import { CoverWrapper } from './styles/CoverView.js'
import getCoverUri from '../../utils/getCoverUri.js'

const CoverView = ({ title, isbn, cover }) => {
  const coverUri = cover ?? getCoverUri(isbn, 'L')
  return <CoverWrapper src={coverUri} alt={'Portada de ' + title} />
}

export default CoverView
