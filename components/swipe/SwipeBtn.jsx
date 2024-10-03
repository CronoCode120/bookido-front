import { Button } from './styles/SwipeBtn.js'

const SwipeBtn = ({ onPress, disabled, isDark, Icon }) => {
  return (
    <Button isDark={isDark} onPress={onPress} disabled={disabled}>
      <Icon />
    </Button>
  )
}

export default SwipeBtn
