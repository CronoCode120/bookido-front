import { CoverWrapper } from './styles/CoverView.js'
import getCoverUri from '../../utils/getCoverUri.js'

const CoverView = ({ title, isbn }) => {
  const cover = getCoverUri(isbn, 'L')
  return <CoverWrapper src={cover} alt={'Portada de ' + title} />
}

export default CoverView
