import { Slot } from 'expo-router'
import { View } from 'react-native'

const RootLayout = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 14
      }}
    >
      <Slot />
    </View>
  )
}

export default RootLayout
