import SwipeLeft from '../components/images/SwipeLeft.jsx'
import SwipeRight from '../components/images/SwipeRight.jsx'
import SwipeUp from '../components/images/SwipeUp.jsx'
import {
  ArrowsWrapper,
  BoldText,
  StyledText,
  TextWrapper,
  Wrapper
} from './styles/Tutorial.js'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Tutorial = () => {
  const { top } = useSafeAreaInsets()
  return (
    <Wrapper marginTop={top}>
      <TextWrapper>
        <BoldText>"Me lo pienso"</BoldText>
        <StyledText>
          Desliza hacia arriba para que el libro se vaya al final de la cola de
          recomendaciones{' '}
        </StyledText>
      </TextWrapper>
      <ArrowsWrapper>
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
      </ArrowsWrapper>
    </Wrapper>
  )
}

export default Tutorial
