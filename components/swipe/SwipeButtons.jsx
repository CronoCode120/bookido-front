import { View } from 'react-native'
import SwipeBtn from './SwipeBtn.jsx'

const SwipeButtons = ({ swipeRight, swipeLeft, disabled }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'stretch',
        marginBottom: 30
      }}
    >
      <SwipeBtn onPress={swipeLeft} text={'Left'} disabled={disabled} />
      <SwipeBtn onPress={swipeRight} text={'Right'} disabled={disabled} />
    </View>
  )
}

export default SwipeButtons
