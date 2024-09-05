import { SessionProvider } from '../context/SessionProvider'
import { Slot } from 'expo-router'

const RootLayout = () => {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  )
}

export default RootLayout
