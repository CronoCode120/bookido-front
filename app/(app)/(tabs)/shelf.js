import Shelf from '../../../pages/Shelf.jsx'
import { ModalProvider } from '../../../context/ModalProvider.js'

const ShelfPage = () => (
  <ModalProvider height={300}>
    <Shelf />
  </ModalProvider>
)

export default ShelfPage
