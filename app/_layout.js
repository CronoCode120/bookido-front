import { ThemeProvider } from 'styled-components'
import { SessionProvider } from '../context/SessionProvider'
import { Stack } from 'expo-router'

import theme from '../theme.js'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor='white' style='dark' />
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
      </ThemeProvider>
    </SessionProvider>
  )
}

export default RootLayout
