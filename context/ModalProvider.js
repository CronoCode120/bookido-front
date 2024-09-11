import { createContext, useContext, useEffect, useState } from 'react'
import { useSlide, useBackAction } from '../hooks'
import { useNavigation } from 'expo-router'

const ModalContext = createContext()

const HEIGHT = 460

export const ModalProvider = ({ children }) => {
  const [focused, setFocused] = useState(true)
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => setVisible(prevState => !prevState)

  const { panGesture, translateY, closeContainer } = useSlide(
    HEIGHT,
    toggleVisible
  )

  useBackAction(() => {
    if (focused && visible) {
      closeContainer()
      return true
    }
    return false
  }, [visible, focused])

  const navigation = useNavigation()
  useEffect(() => {
    navigation.addListener('blur', () => setFocused(false))
    navigation.addListener('focus', () => setFocused(true))
  }, [navigation])

  return (
    <ModalContext.Provider
      value={{
        visible,
        toggleVisible,
        closeContainer,
        panGesture,
        translateY,
        HEIGHT
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const value = useContext(ModalContext)
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useModal must be wrapped in a <ModalProvider />')
    }
  }
  return value
}
