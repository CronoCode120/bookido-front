import { useState } from 'react'
import { useBookISBN } from '../../hooks'
import getAuthors from '../../utils/getAuthors.js'
import getCoverUri from '../../utils/getCoverUri.js'
import { Text, View } from 'react-native'
import Screen from '../Screen.jsx'
import { Stack } from 'expo-router'
import NavHeader from '../NavHeader.jsx'
import Button from './Button.jsx'
import { HeartIcon, LikeIcon, DislikeIcon } from '../icons'
import { Cover } from '../../styles.js'
import {
  Container,
  Header,
  Heading,
  HeadingWrapper,
  Input,
  MainWrapper,
  RateBtn,
  RateText,
  RatingWrapper
} from './styles/Review.js'

const Review = ({ isbn }) => {
  const [book] = useBookISBN(isbn, ['title', 'author'])
  const [review, setReview] = useState('')

  const cover = getCoverUri(isbn)

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerShown: true,
          headerLeft: () => <NavHeader title='Añadir reseña' />
        }}
      />
      <Container>
        <MainWrapper>
          <Header>
            <Cover
              $width='20%'
              src={cover}
              style={{ backgroundColor: 'lightgray' }}
            />
            <HeadingWrapper>
              <Heading>{book?.title}</Heading>
              <Text>{getAuthors(book?.author)}</Text>
            </HeadingWrapper>
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
    </Screen>
  )
}

export default Review
