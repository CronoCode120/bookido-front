import { useState } from 'react'
import { useBookISBN } from '../../hooks'
import getAuthors from '../../utils/getAuthors.js'
import getCoverUri from '../../utils/getCoverUri.js'
import { Text } from 'react-native'
import Screen from '../Screen.jsx'
import { Stack } from 'expo-router'
import NavHeader from '../NavHeader.jsx'
import Button from '../Button.jsx'
import { HeartIcon, LikeIcon, DislikeIcon } from '../icons'
import { Cover } from '../styles/Cover.js'
import {
  Container,
  Header,
  Heading,
  HeadingWrapper,
  Input,
  MainWrapper,
  RatingWrapper
} from './styles/Review.js'
import RatingBtn from './RatingBtn.jsx'

const ratings = [
  { label: 'Me encantó', value: 'love', icon: HeartIcon },
  { label: 'Me gustó', value: 'like', icon: LikeIcon },
  { label: 'No es para mí', value: 'dislike', icon: DislikeIcon }
]

const Review = ({ isbn }) => {
  const [book] = useBookISBN(isbn, ['title', 'author'])

  const [review, setReview] = useState('')
  const [rating, setRating] = useState(null)

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
            {ratings.map(({ label, value, icon }) => (
              <RatingBtn
                key={value}
                label={label}
                value={value}
                Icon={icon}
                selectedValue={rating}
                onPress={setRating}
              />
            ))}
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
