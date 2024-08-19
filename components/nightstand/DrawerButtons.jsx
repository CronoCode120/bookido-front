import Button from './Button.jsx'
import { Wrapper } from './styles/DrawerButtons.js'

const DrawerButtons = () => {
  return (
    <Wrapper>
      <Button>Marcar como leído</Button>
      <Button type='tertiary'>Caja de donaciones</Button>
    </Wrapper>
  )
}

export default DrawerButtons
