import { View } from 'react-native'
import { useState } from 'react'
import SwipeBtn from './SwipeBtn.jsx'

const SwipeButtons = ({ swipeRight, swipeLeft }) => {
  const [disabled, setDisabled] = useState(false)

  const handlePress = onPress => () => {
    setDisabled(true)
    onPress()
    setTimeout(() => setDisabled(false), 1500)
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'stretch',
        marginBottom: 30
      }}
    >
      <SwipeBtn
        onPress={handlePress(swipeLeft)}
        text={'Left'}
        disabled={disabled}
      />
      <SwipeBtn
        onPress={handlePress(swipeRight)}
        text={'Right'}
        disabled={disabled}
      />
    </View>
  )
}

export default SwipeButtons
