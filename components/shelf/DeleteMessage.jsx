import { StyledButton } from './styles/Options.js'

const DeleteMessage = ({ hideDelete }) => (
  <>
    <StyledButton warning>Archivar</StyledButton>
    <StyledButton onPress={hideDelete}>Volver</StyledButton>
  </>
)

export default DeleteMessage
