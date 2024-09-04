import Button, { LinkButton } from './Button.jsx'
import { Wrapper } from './styles/DrawerButtons.js'

const DrawerButtons = ({ isbn }) => {
  return (
    <Wrapper>
      <LinkButton href={`/${isbn}`}>Marcar como leído</LinkButton>
      <Button type='tertiary'>Caja de donaciones</Button>
    </Wrapper>
  )
}

export default DrawerButtons
