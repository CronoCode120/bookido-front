import { Stack } from 'expo-router'
import { View } from 'react-native'

const RootLayout = () => {
  return (
    <View
      style={{
        flex: 1
      }}
    >
      <Stack
        screenOptions={{
          headerTitle: '',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: 'transparent' },
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'slide_from_right'
        }}
      />
    </View>
  )
}

export default RootLayout
