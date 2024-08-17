import { Modal, Text, Pressable } from 'react-native'
import {
  Container,
  ContentWrapper,
  Title,
  Cover,
  Author,
  InfoWrapper,
  DetailWrapper,
  DetailText,
  DetailTitle,
  Heading
} from './styles/AddDrawer.js'
import { getFullAuthors } from '../../utils/getAuthors.js'
import BackdropBlur from './BackdropBlur.jsx'
import BookDetails from './BookDetails.jsx'

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
          <Pressable onPress={toggleDrawer} style={{ padding: 20 }}>
            <Text>XXXX</Text>
          </Pressable>
        </Container>
      </Modal>
    </BackdropBlur>
  )
}

export default AddDrawer
