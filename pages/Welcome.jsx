import {
  ButtonWrapper,
  Container,
  MainWrapper,
  StyledButton,
  SvgWrapper,
  Title,
  Wrapper
} from './styles/Welcome'

import WelcomeImg1 from '../components/images/WelcomeImg1.jsx'
import WelcomeImg2 from '../components/images/WelcomeImg2.jsx'
import WelcomeImg3 from '../components/images/WelcomeImg3.jsx'

import PageIndicator from '../components/PageIndicator.jsx'
import { useState } from 'react'

const Welcome = () => {
  const PAGES = 3
  const [pageNum, setPageNum] = useState(1)
  const { title, WelcomeImg } = pageInfo[pageNum - 1]

  const nextPage = () =>
    setPageNum(prevNum => {
      if (prevNum >= PAGES) return PAGES
      return prevNum + 1
    })

  return (
    <Container>
      <Wrapper>
        <MainWrapper>
          <Title>{title}</Title>
          <SvgWrapper>
            <WelcomeImg />
          </SvgWrapper>
        </MainWrapper>
        <ButtonWrapper>
          <StyledButton onPress={nextPage}>Siguiente</StyledButton>
          <PageIndicator pages={PAGES} pageNum={pageNum} />
        </ButtonWrapper>
      </Wrapper>
    </Container>
  )
}

export default Welcome

const pageInfo = [
  {
    title: '¿Hace cuánto que no te enamoras de un libro?',
    WelcomeImg: WelcomeImg1
  },
  {
    title: 'Entre tantos libros, no encontrar ese chispazo es frustrante',
    WelcomeImg: WelcomeImg2
  },
  {
    title: 'En Bookido, cada swipe puede ser el inicio de algo especial',
    WelcomeImg: WelcomeImg3
  }
]
