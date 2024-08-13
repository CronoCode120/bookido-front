import { SidePressable, TouchWrapper } from '../styles/SideTouch.js'

const SideTouch = ({ handleLeft, handleRight }) => {
  return (
    <TouchWrapper>
      <SidePressable onPress={handleLeft} />
      <SidePressable onPress={handleRight} />
    </TouchWrapper>
  )
}

export default SideTouch
