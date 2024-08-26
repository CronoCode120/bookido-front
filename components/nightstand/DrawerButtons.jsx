import Button from './Button.jsx'
import { Link } from 'expo-router'
import { Wrapper } from './styles/DrawerButtons.js'

const DrawerButtons = ({ isbn }) => {
  return (
    <Wrapper>
      <Link href={`/${isbn}`} asChild>
        <Button>Marcar como leído</Button>
      </Link>
      <Button type='tertiary'>Caja de donaciones</Button>
    </Wrapper>
  )
}

export default DrawerButtons
