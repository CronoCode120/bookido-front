import { Modal, Text, Pressable } from 'react-native'
import { Container } from './styles/AddDrawer.js'
import BackdropBlur from './BackdropBlur.jsx'
import BookDetails from './BookDetails.jsx'
import DrawerButtons from './DrawerButtons.jsx'

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
          <BookDetails book={book} />
          <DrawerButtons />
          <Pressable onPress={toggleDrawer} style={{ padding: 20 }}>
            <Text>XXXX</Text>
          </Pressable>
        </Container>
      </Modal>
    </BackdropBlur>
  )
}

export default AddDrawer
