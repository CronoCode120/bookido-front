import { useState } from 'react'
import { DrawerModal } from '../nightstand'
import Options from './Options.jsx'
import { Title, Wrapper } from './styles/Options'

const OptionsDrawer = () => {
  const [showDelete, setShowDelete] = useState(false)

  return (
    <DrawerModal>
      <Wrapper>
        <Title>Opciones</Title>
        <Options />
      </Wrapper>
    </DrawerModal>
  )
}

export default OptionsDrawer
