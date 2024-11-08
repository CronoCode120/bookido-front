import { createContext, useContext, useState } from 'react'
import { useStorageState } from '../hooks/useStorageState.js'

const AuthContext = createContext()

export const SessionProvider = ({ children }) => {
  const [[loading, firstLaunchDone], setFirstLaunchDone] =
    useStorageState('first_launch')
  const [[loadingSession, session], setSession] = useStorageState('session')

  const isLoading = loading || loadingSession

  const disableWelcome = () => setFirstLaunchDone('true')

  const signIn = async session => {
    if (session) setSession(session)
  }

  const signOut = () => setSession(null)

  const [updateStand, setUpdateStand] = useState(true)
  const [updateShelf, setUpdateShelf] = useState(true)

  return (
    <AuthContext.Provider
      value={{
        session,
        firstLaunchDone,
        isLoading,
        signIn,
        signOut,
        disableWelcome,
        updateStand,
        setUpdateStand,
        updateShelf,
        setUpdateShelf
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useSession = () => {
  const value = useContext(AuthContext)
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />')
    }
  }
  return value
}
