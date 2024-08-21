import { Text, View } from 'react-native'
import Button from './Button.jsx'
import { HeartIcon, LikeIcon, DislikeIcon } from '../icons'
import { Cover } from '../../styles.js'
import {
  Container,
  Header,
  Heading,
  Input,
  MainWrapper,
  RateBtn,
  RateText,
  RatingWrapper
} from './styles/Review.js'
import { useState } from 'react'

const Review = () => {
  const [review, setReview] = useState('')

  return (
    <Container>
      <MainWrapper>
        <Header>
          <Cover width='20%' style={{ backgroundColor: 'lightgray' }} />
          <View>
            <Heading>Título</Heading>
            <Text>Autor</Text>
          </View>
        </Header>
        <Heading>¿Qué te pareció este libro?</Heading>
        <RatingWrapper>
          <RateBtn>
            <HeartIcon />
            <RateText>Me encantó</RateText>
          </RateBtn>
          <RateBtn>
            <LikeIcon />
            <RateText>Me gustó</RateText>
          </RateBtn>
          <RateBtn>
            <DislikeIcon />
            <RateText>No es para mí</RateText>
          </RateBtn>
        </RatingWrapper>
        <Heading>Si quieres, deja una reseña</Heading>
        <Input value={review} onChangeText={text => setReview(text)} />
      </MainWrapper>
      <Button>Guardar y marcar como leído</Button>
    </Container>
  )
}

export default Review
