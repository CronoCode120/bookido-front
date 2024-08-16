import Svg, { Path } from 'react-native-svg'
const AddIcon = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={28}
    height={28}
    fill='none'
    {...props}
  >
    <Path
      stroke='#1F1F1F'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M14 2v24M2 14h24'
    />
  </Svg>
)

export default AddIcon
