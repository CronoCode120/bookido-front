import { useLocalSearchParams } from 'expo-router'

const BookPage = () => {
  const { isbn } = useLocalSearchParams()

  return <BookProfile isbn={isbn} />
}

export default BookPage
