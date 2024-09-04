import Svg, { Path } from 'react-native-svg'

const BackIcon = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <Path
      stroke='#1F1F1F'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M4 12h16M9 17s-5-3.682-5-5 5-5 5-5'
    />
  </Svg>
)
export default BackIcon
