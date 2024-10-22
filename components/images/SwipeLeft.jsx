import Svg, { Path } from 'react-native-svg'
const SwipeLeft = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={52}
    height={63}
    fill='none'
    {...props}
  >
    <Path
      fill='#FFFAFA'
      d='M48.511 60.803a1.5 1.5 0 1 0 2.978-.368l-2.978.367ZM.94 10.939a1.5 1.5 0 0 0 0 2.122l9.546 9.546a1.5 1.5 0 1 0 2.122-2.122L4.12 12l8.486-8.485a1.5 1.5 0 1 0-2.122-2.122L.94 10.94Zm50.55 49.496c-1.025-8.303-4.699-20.72-12.436-31.1C31.279 18.907 19.365 10.5 2 10.5v3c16.235 0 27.321 7.8 34.647 17.628C44.01 41.007 47.536 52.9 48.511 60.803l2.978-.368Z'
    />
  </Svg>
)
export default SwipeLeft
