import { useState } from 'react'
import { DrawerModal } from '../nightstand'
import Options from './Options.jsx'
import DeleteMessage from './DeleteMessage.jsx'
import { Title, Wrapper } from './styles/Options'

const OptionsDrawer = () => {
  const [deleteMsg, setDeleteMsg] = useState(false)

  const showDelete = () => setDeleteMsg(true)
  const hideDelete = () => setDeleteMsg(false)

  return (
    <DrawerModal>
      <Wrapper>
        <Title>
          {deleteMsg ? '¿Estás seguro de que quieres archivarlo?' : 'Opciones'}
        </Title>
        {deleteMsg ? (
          <DeleteMessage hideDelete={hideDelete} />
        ) : (
          <Options showDelete={showDelete} />
        )}
      </Wrapper>
    </DrawerModal>
  )
}

export default OptionsDrawer
