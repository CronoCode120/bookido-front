import { Redirect, Stack } from 'expo-router'
import { Text } from 'react-native'

import { useSession } from '../../context/SessionProvider'
import { useEffect, useState } from 'react'
import Tutorial from '../../components/Tutorial'

const AppLayout = () => {
  const { isLoading, session, firstLaunchDone, disableWelcome } = useSession()
  const [mounted, setMounted] = useState(false)

  const [tutorial, setTutorial] = useState(false)
  const closeTutorial = () => {
    setTutorial(false)
    disableWelcome()
  }

  useEffect(() => {
    if (!mounted) setMounted(true)
  }, [mounted])

  if (!mounted) return

  if (isLoading) return <Text>Cargando...</Text>

  if (firstLaunchDone !== 'true') return <Redirect href='/welcome' />

  if (!session) return <Redirect href='/login' />

  if (session)
    return (
      <>
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
        {tutorial && <Tutorial closeTutorial={closeTutorial} />}
      </>
    )
}

export default AppLayout
