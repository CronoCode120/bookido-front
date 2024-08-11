import { Pressable, Text } from 'react-native'

const SwipeBtn = ({ onPress, text }) => {
  return (
    <Pressable onPress={onPress}>
      <Text>{text}</Text>
    </Pressable>
  )
}

export default SwipeBtn
