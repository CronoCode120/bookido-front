import { Redirect, SplashScreen, Stack } from 'expo-router'

import { useSession } from '../../context/SessionProvider'
import { useEffect, useState } from 'react'
import Tutorial from '../../components/Tutorial'

SplashScreen.preventAutoHideAsync()

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

  useEffect(() => {
    if (!isLoading) SplashScreen.hideAsync()
  }, [isLoading])

  if (!mounted) return

  if (isLoading) return

  if (firstLaunchDone !== 'true' && !session)
    return <Redirect href='/welcome' />

  if (!session) return <Redirect href='/login' />

  if (session) {
    if (firstLaunchDone !== 'true') setTutorial(true)
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
}

export default AppLayout
