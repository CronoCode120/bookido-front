import Svg, { Path } from 'react-native-svg'
import theme from '../../theme.js'
const ClockIcon = ({ dark, ...props }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={30}
    height={30}
    fill='none'
    {...props}
  >
    <Path
      stroke={dark ? theme.colors.WHITE : '#1F1F1F'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m5.267 10.25-3.514-.215C4.272 3.387 11.504-.4 18.555 1.483c7.51 2.005 11.972 9.682 9.964 17.148-2.007 7.465-9.723 11.892-17.233 9.886A14.05 14.05 0 0 1 1 17.078'
    />
    <Path
      stroke={dark ? theme.colors.WHITE : '#1F1F1F'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M15 9.4V15l2.8 2.8'
    />
  </Svg>
)
export default ClockIcon
