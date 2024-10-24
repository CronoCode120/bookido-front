import { useState } from 'react'
import { Text } from 'react-native'
import RatingBtn from './RatingBtn.jsx'
import Screen from '../Screen.jsx'
import Button from '../Button.jsx'
import NavHeader from '../NavHeader.jsx'
import { router, Stack } from 'expo-router'
import { useBookISBN } from '../../hooks'
import getAuthors from '../../utils/getAuthors.js'
import getCoverUri from '../../utils/getCoverUri.js'
import { addReview } from '../../api/review.js'
import { HeartIcon, LikeIcon, DislikeIcon } from '../icons'
import { Cover } from '../styles/Cover.js'
import {
  Container,
  Header,
  Heading,
  HeadingWrapper,
  Input,
  MainWrapper,
  RatingWrapper,
  SectionTitle
} from './styles/Review.js'
import { useSession } from '../../context/SessionProvider.js'

const ratings = [
  { label: 'Me encantó', value: 2, icon: HeartIcon },
  { label: 'Me gustó', value: 1, icon: LikeIcon },
  { label: 'No es para mí', value: 0, icon: DislikeIcon }
]

const Review = ({ isbn }) => {
  const book = useBookISBN(isbn, ['title', 'author'])
  const { session, setUpdateStand, setUpdateShelf } = useSession()

  const [review, setReview] = useState('')
  const [rating, setRating] = useState(null)

  const cover = book?.cover || getCoverUri(isbn)

  const [loading, setLoading] = useState(false)

  const submitReview = async () => {
    if (rating === null) return
    setLoading(true)
    await addReview({
      userId: session,
      isbn,
      value: rating,
      review
    })
    setLoading(false)
    setUpdateStand(true)
    setUpdateShelf(true)

    router.back()
  }

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
              <Text>{getAuthors(book?.author ?? book?.authors)}</Text>
            </HeadingWrapper>
          </Header>
          <SectionTitle>¿Qué te pareció este libro? *</SectionTitle>
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
          <SectionTitle>Si quieres, deja una reseña</SectionTitle>
          <Input value={review} onChangeText={text => setReview(text)} />
        </MainWrapper>
        <Button
          onPress={submitReview}
          loading={loading}
          disabled={rating === null}
        >
          Guardar y enviar a Estantería
        </Button>
      </Container>
    </Screen>
  )
}

export default Review
