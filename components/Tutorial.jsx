import { useState } from 'react'
import SwipeLeft from './images/SwipeLeft.jsx'
import SwipeRight from './images/SwipeRight.jsx'
import SwipeUp from './images/SwipeUp.jsx'
import { TapIcon } from './icons'
import {
  SideWrapper,
  BoldText,
  StyledText,
  TextWrapper,
  Wrapper,
  NextButton,
  Container,
  TapWrapper
} from './styles/Tutorial.js'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Tutorial = () => {
  const { top } = useSafeAreaInsets()
  const [page, setPage] = useState(2)

  const handlePress = () => setPage(page + 1)

  return (
    <Wrapper marginTop={top}>
      <NextButton onPress={handlePress}>
        <StyledText>Siguiente</StyledText>
      </NextButton>
      {page === 1 && (
        <Container>
          <TextWrapper marginTop={80}>
            <BoldText>"Me lo pienso"</BoldText>
            <StyledText>
              Desliza hacia arriba para que el libro se vaya al final de la cola
              de recomendaciones
            </StyledText>
          </TextWrapper>
          <SideWrapper>
            <TextWrapper $width={145}>
              <SwipeLeft />
              <BoldText>"No me gusta"</BoldText>
              <StyledText>
                Desliza hacia la izquierda para eliminar la recomendación
              </StyledText>
            </TextWrapper>
            <SwipeUp />
            <TextWrapper $width={145}>
              <SwipeRight />
              <BoldText>"Me gusta"</BoldText>
              <StyledText>
                Desliza hacia la derecha para añadirlo a tu Mesita de Noche
              </StyledText>
            </TextWrapper>
          </SideWrapper>
        </Container>
      )}
      {page === 2 && (
        <Container style={{ justifyContent: 'center' }}>
          <TapWrapper>
            <TapIcon />
            <TapIcon />
          </TapWrapper>
          <BoldText fontSize={18}>
            Toca la pantalla para cambiar de página
          </BoldText>
        </Container>
      )}
    </Wrapper>
  )
}

export default Tutorial
