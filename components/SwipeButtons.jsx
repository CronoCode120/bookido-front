import { Pressable, View, Text } from 'react-native'

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
      <Pressable onPress={swipeInstance?.swipeLeft}>
        <Text>{':('}</Text>
      </Pressable>
      <Pressable onPress={swipeInstance?.swipeRight}>
        <Text>{'3'}</Text>
      </Pressable>
    </View>
  )
}

export default SwipeButtons
