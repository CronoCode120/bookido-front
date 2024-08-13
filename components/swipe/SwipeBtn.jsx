import { Text } from 'react-native'
import { Button } from '../styles/SwipeBtn.js'

const SwipeBtn = ({ onPress, text, disabled }) => {
  return (
    <Button onPress={onPress} disabled={disabled}>
      <Text>{text}</Text>
    </Button>
  )
}

export default SwipeBtn
