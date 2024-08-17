import { Button, Label, Wrapper } from './styles/DrawerButtons.js'

const DrawerButtons = () => {
  return (
    <Wrapper>
      <Button>
        <Label>Marcar como leído</Label>
      </Button>
      <Button>
        <Label>Caja de donaciones</Label>
      </Button>
    </Wrapper>
  )
}

export default DrawerButtons
