import Svg, { Path } from 'react-native-svg'
const CrossIcon = props => (
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
      d='M19 5 5 19M5 5l14 14'
    />
  </Svg>
)
export default CrossIcon
