import { Modal } from 'react-native'
import { Container } from './styles/AddDrawer.js'
import BackdropBlur from './BackdropBlur.jsx'
import BookDetails from './BookDetails.jsx'
import DrawerButtons from './DrawerButtons.jsx'
import CloseBtn from './CloseBtn.jsx'

const AddDrawer = ({ book, visible, toggleDrawer }) => {
  return (
    <BackdropBlur visible={visible}>
      <Modal
        animationType='slide'
        visible={visible}
        onRequestClose={toggleDrawer}
        transparent
      >
        <Container>
          <CloseBtn onPress={toggleDrawer} />
          <BookDetails book={book} />
          <DrawerButtons />
        </Container>
      </Modal>
    </BackdropBlur>
  )
}

export default AddDrawer
