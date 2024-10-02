import { Modal } from 'react-native'
import { StyledButton } from './styles/Options.js'
import { Container, Message, Wrapper } from './styles/DeleteModal.js'

const DeleteModal = ({ isVisible, setVisible }) => (
  <Modal
    visible={isVisible}
    animationType='fade'
    transparent
    onRequestClose={() => setVisible(false)}
  >
    <Wrapper>
      <Container>
        <Message>¿Estás seguro/a de que quieres archivarlo?</Message>
        <StyledButton warning>Archivar</StyledButton>
        <StyledButton onPress={() => setVisible(false)}>Volver</StyledButton>
      </Container>
    </Wrapper>
  </Modal>
)

export default DeleteModal
