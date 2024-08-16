import { View } from 'react-native'
import ReadList from './nightstand/ReadList.jsx'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Main = () => {
  const insets = useSafeAreaInsets()
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right
      }}
    >
      <ReadList />
    </View>
  )
}

export default Main
