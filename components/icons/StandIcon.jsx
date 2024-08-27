import Svg, { Path } from 'react-native-svg'

const StandIcon = props => (
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
      d='M20 10s2.375 1.822 1.375 4.667c-1 2.844 0 4.74.625 5.333m-2-10H4m16 0V4M4 10s-2.375 1.822-1.375 4.667c1 2.844 0 4.74-.625 5.333m2-10V4m16 0h2m-2 0H4m0 0H2M11 7h2'
    />
  </Svg>
)
export default StandIcon
