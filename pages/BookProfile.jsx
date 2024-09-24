import { Stack } from 'expo-router'
import NavHeader from '../components/NavHeader.jsx'
import {
  Author,
  Publisher,
  SynopsisBody,
  SynopsisHeading,
  Title,
  Wrapper
} from './styles/BookProfile.js'

import { Cover } from '../components/styles/Cover.js'
import getCoverUri from '../utils/getCoverUri.js'

import { useBookISBN, useBookSynopsis } from '../hooks'

const BookProfile = ({ isbn }) => {
  const { title, author, publisher } =
    useBookISBN(isbn, ['title', 'author', 'publisher']) ?? {}
  const cover = getCoverUri(isbn, 'L')
  const [synopsis] = useBookSynopsis(isbn)

  return (
    <Wrapper>
      <Stack.Screen
        options={{
          headerShown: true,
          headerLeft: NavHeader
        }}
      />
      <Cover src={cover} $width='56%' />
      <Title>{title}</Title>
      <Author>{author}</Author>
      <Publisher>{publisher}</Publisher>
      <SynopsisHeading>Sinopsis</SynopsisHeading>
      <SynopsisBody>{synopsis}</SynopsisBody>
    </Wrapper>
  )
}

export default BookProfile
