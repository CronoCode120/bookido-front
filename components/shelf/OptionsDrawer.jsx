import { useState } from 'react'
import { DrawerModal } from '../nightstand'
import Options from './Options.jsx'
import DeleteModal from './DeleteModal.jsx'
import { Title, Wrapper } from './styles/Options'

const OptionsDrawer = () => {
  const [deleteMsg, setDeleteMsg] = useState(false)

  const showDelete = () => setDeleteMsg(true)
  const hideDelete = () => setDeleteMsg(false)

  return (
    <>
      <DrawerModal>
        <Wrapper>
          <Title>Opciones</Title>
          <Options showDelete={showDelete} />
        </Wrapper>
      </DrawerModal>
      <DeleteModal isVisible={deleteMsg} setVisible={setDeleteMsg} />
    </>
  )
}

export default OptionsDrawer
