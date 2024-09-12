import { ThemeProvider } from 'styled-components'
import { SessionProvider } from '../context/SessionProvider'
import { Slot } from 'expo-router'

import theme from '../theme.js'

const RootLayout = () => {
  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <Slot />
      </ThemeProvider>
    </SessionProvider>
  )
}

export default RootLayout
