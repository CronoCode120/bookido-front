import { createContext, useContext, useEffect } from 'react'
import { useStorageState } from '../hooks/useStorageState.js'
import { logIn } from '../api/user.js'

const AuthContext = createContext()

export const SessionProvider = ({ children }) => {
  const [[isLoading, session], setSession] = useStorageState('session')

  useEffect(() => {
    console.log(session)
  }, [session])

  const signIn = async (email, password) => {
    try {
      const userId = (await logIn({ email, password })).userId
      if (userId) setSession(userId)
    } catch (error) {
      console.log(error)
    }
  }

  const signOut = () => setSession(null)

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoading,
        signIn,
        signOut
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
