import { StyledButton } from './styles/Options.js'

const Options = ({ showDelete }) => (
  <>
    <StyledButton>Editar/añadir reseña</StyledButton>
    <StyledButton onPress={showDelete} warning>
      Archivar libro
    </StyledButton>
  </>
)

export default Options
