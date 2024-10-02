import Button, { LinkButton } from '../Button.jsx'
import { Wrapper } from './styles/DrawerButtons.js'

const DrawerButtons = ({ isbn }) => {
  return (
    <Wrapper>
      <LinkButton href={`/review/${isbn}`}>Marcar como leído</LinkButton>
      <Button type='secondary' warning>
        Donar libro
      </Button>
    </Wrapper>
  )
}

export default DrawerButtons
