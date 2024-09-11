import { GestureDetector } from 'react-native-gesture-handler'
import { PannableArea, SlideBar } from './styles/Slider.js'

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
