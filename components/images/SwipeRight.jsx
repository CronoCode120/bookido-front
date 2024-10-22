import Svg, { Path } from 'react-native-svg'
const SwipeRight = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={52}
    height={63}
    fill='none'
    {...props}
  >
    <Path
      fill='#FFFAFA'
      d='M3.489 60.803a1.5 1.5 0 1 1-2.978-.368l2.978.367ZM51.06 10.939a1.5 1.5 0 0 1 0 2.122l-9.546 9.546a1.5 1.5 0 1 1-2.122-2.122L47.88 12l-8.486-8.485a1.5 1.5 0 1 1 2.122-2.122l9.546 9.546ZM.51 60.435c1.025-8.303 4.699-20.72 12.436-31.1C20.721 18.907 32.635 10.5 50 10.5v3c-16.235 0-27.321 7.8-34.647 17.628C7.99 41.007 4.464 52.9 3.489 60.803L.51 60.434Z'
    />
  </Svg>
)
export default SwipeRight
