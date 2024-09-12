import theme from '../../theme.js'
import Button, { LinkButton } from '../Button.jsx'
import { AddIcon } from '../icons'
import {
  ContentWrapper,
  LabelWrapper,
  LinkLabel,
  LinkTitle,
  Wrapper
} from './styles/DrawerButtons.js'

const DrawerButtons = ({ isbn }) => {
  return (
    <Wrapper>
      <LinkButton href={`/review/${isbn}`}>
        <ContentWrapper>
          <LabelWrapper>
            <LinkTitle>Añadir</LinkTitle>
            <LinkLabel>Reseña y valoración</LinkLabel>
          </LabelWrapper>
          <AddIcon color={theme.colors.WHITE} />
        </ContentWrapper>
      </LinkButton>
      <Button type='tertiary'>Caja de donaciones</Button>
    </Wrapper>
  )
}

export default DrawerButtons
