import { Redirect, Stack } from 'expo-router'
import { Text, View } from 'react-native'

import { useSession } from '../../context/SessionProvider'
import { useEffect, useState } from 'react'

const AppLayout = () => {
  const { isLoading, session } = useSession()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (!mounted) setMounted(true)
  }, [mounted])

  if (mounted) {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        {isLoading ? (
          <Text>Cargando...</Text>
        ) : !session ? (
          <Redirect href='/login' />
        ) : (
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
        )}
      </View>
    )
  }
}

export default AppLayout
