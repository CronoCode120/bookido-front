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
          <ContentWrapper>
            <Cover src={book?.cover} />
            <InfoWrapper>
              <Heading>
                <Title>{book?.title}</Title>
                <Author>{book?.author && getFullAuthors(book.author)}</Author>
              </Heading>
              <DetailWrapper>
                <DetailText>
                  <DetailTitle>ISBN</DetailTitle> {book?.isbn[0]}
                </DetailText>
                <DetailText>
                  <DetailTitle>EDITORIAL</DetailTitle> {book?.publisher[0]}
                </DetailText>
              </DetailWrapper>
            </InfoWrapper>
          </ContentWrapper>
          <Pressable onPress={toggleDrawer} style={{ padding: 20 }}>
            <Text>XXXX</Text>
          </Pressable>
        </Container>
      </Modal>
    </BackdropBlur>
  )
}

export default AddDrawer
