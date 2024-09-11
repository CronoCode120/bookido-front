import ReadList from '../../../components/nightstand/ReadList.jsx'
import { ModalProvider } from '../../../context/ModalProvider.js'

const NightStand = () => (
  <ModalProvider>
    <ReadList />
  </ModalProvider>
)

export default NightStand
