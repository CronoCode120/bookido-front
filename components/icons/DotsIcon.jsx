import Svg, { Path } from 'react-native-svg'

const DotsIcon = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={25}
    height={25}
    fill='none'
    {...props}
  >
    <Path
      stroke='#1F1F1F'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2.5}
      d='M12.232 12.38h.01M18.236 12.38h.01M6.236 12.38h.01'
    />
  </Svg>
)
export default DotsIcon
