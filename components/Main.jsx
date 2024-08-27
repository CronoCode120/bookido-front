import BookSwipe from './swipe/BookSwipe.jsx'
import Screen from './Screen.jsx'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Main = () => {
  const { top } = useSafeAreaInsets()
  return (
    <Screen style={{ paddingTop: top }}>
      <BookSwipe />
    </Screen>
  )
}

export default Main
