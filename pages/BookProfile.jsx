import { Stack } from 'expo-router'
import NavHeader from '../components/NavHeader.jsx'
import { Text } from 'react-native'
import {
  Author,
  BoldBodyText,
  Divider,
  InfoItem,
  InfoWrapper,
  Publisher,
  Section,
  SynopsisBody,
  SynopsisHeading,
  Title,
  Wrapper
} from './styles/BookProfile.js'

import { Cover } from '../components/styles/Cover.js'
import getCoverUri from '../utils/getCoverUri.js'

import { useBookISBN, useBookSynopsis } from '../hooks'

const BookProfile = ({ isbn }) => {
  const { title, authors, publisher, publish_date, cover } =
    useBookISBN(isbn, ['title', 'author', 'publisher', 'publish_date']) ?? {}
  const coverUri = cover ?? getCoverUri(isbn, 'L')
  const [synopsis] = useBookSynopsis(isbn)

  return (
    <Wrapper>
      <Stack.Screen
        options={{
          headerShown: true,
          headerLeft: () => <NavHeader title={title} />
        }}
      />
      <Section>
        <Cover src={coverUri} $width='56%' />
        <Title>{title}</Title>
        <Author>{authors && authors[0]}</Author>
        <Publisher>{publisher}</Publisher>
        <SynopsisHeading>Sinopsis</SynopsisHeading>
        <SynopsisBody>{synopsis}</SynopsisBody>
      </Section>
      <Divider />
      <Section>
        <InfoWrapper>
          <InfoItem>
            <BoldBodyText>ISBN</BoldBodyText>
            <Text>{isbn}</Text>
          </InfoItem>
          <InfoItem>
            <BoldBodyText>Fecha de publicación</BoldBodyText>
            <Text>{publish_date}</Text>
          </InfoItem>
        </InfoWrapper>
      </Section>
      <Divider />
    </Wrapper>
  )
}

export default BookProfile
