import { Button } from './styles/SwipeBtn.js'

const SwipeBtn = ({ onPress, disabled, Icon }) => {
  return (
    <Button onPress={onPress} disabled={disabled}>
      <Icon />
    </Button>
  )
}

export default SwipeBtn
