import { useEffect } from 'react'
import { BackHandler } from 'react-native'

const useBackAction = (onBack, deps) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      onBack
    )

    return () => backHandler.remove()
  }, deps)
}

export default useBackAction
