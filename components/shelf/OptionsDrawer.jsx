import { useState } from 'react'
import { DrawerModal } from '../nightstand'
import { LinkButton } from '../Button.jsx'
import DeleteModal from './DeleteModal.jsx'
import { Title, Wrapper, StyledButton } from './styles/Options'

const OptionsDrawer = ({ curIsbn }) => {
  const [deleteMsg, setDeleteMsg] = useState(false)

  const showDelete = () => setDeleteMsg(true)

  return (
    <>
      <DrawerModal>
        <Wrapper>
          <Title>Opciones</Title>
          <StyledButton
            as={LinkButton}
            href={`/review/${curIsbn}`}
            type='secondary'
          >
            Editar/añadir reseña
          </StyledButton>
          <StyledButton onPress={showDelete} warning>
            Archivar libro
          </StyledButton>
        </Wrapper>
      </DrawerModal>
      <DeleteModal isVisible={deleteMsg} setVisible={setDeleteMsg} />
    </>
  )
}

export default OptionsDrawer
