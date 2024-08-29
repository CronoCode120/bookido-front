import { PannableArea, SlideBar } from './styles/Slider.js'
import { GestureDetector } from 'react-native-gesture-handler'

const Slider = ({ panGesture }) => {
  return (
    <GestureDetector gesture={panGesture}>
      <PannableArea>
        <SlideBar />
      </PannableArea>
    </GestureDetector>
  )
}

export default Slider
