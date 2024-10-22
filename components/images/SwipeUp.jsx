import Svg, { Path } from 'react-native-svg'
const SwipeUp = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={165}
    fill='none'
    {...props}
  >
    <Path
      fill='#FFFAFA'
      d='M10.5 163a1.5 1.5 0 0 0 3 0h-3ZM13.06.94a1.5 1.5 0 0 0-2.12 0l-9.547 9.545a1.5 1.5 0 1 0 2.122 2.122L12 4.12l8.485 8.486a1.5 1.5 0 1 0 2.122-2.122L13.06.94ZM13.5 163V2h-3v161h3Z'
    />
  </Svg>
)
export default SwipeUp
