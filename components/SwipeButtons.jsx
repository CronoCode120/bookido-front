import { View } from 'react-native'
import SwipeBtn from './SwipeBtn.jsx'

const SwipeButtons = ({ swipeInstance }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'stretch',
        marginBottom: 30
      }}
    >
      <SwipeBtn onPress={swipeInstance.swipeLeft} text={'Left'} />
      <SwipeBtn onPress={swipeInstance.swipeRight} text={'Right'} />
    </View>
  )
}

export default SwipeButtons
