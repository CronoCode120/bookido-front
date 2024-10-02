import { Modal } from 'react-native'
import { StyledButton } from './styles/Options.js'
import { Container, Wrapper } from './styles/DeleteModal.js'

const DeleteModal = ({ isVisible, setVisible }) => (
  <Modal
    visible={isVisible}
    animationType='fade'
    transparent
    onRequestClose={() => setVisible(false)}
  >
    <Wrapper>
      <Container>
        <StyledButton warning>Archivar</StyledButton>
        <StyledButton onPress={() => setVisible(false)}>Volver</StyledButton>
      </Container>
    </Wrapper>
  </Modal>
)

export default DeleteModal
