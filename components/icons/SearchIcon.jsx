import Svg, { Path } from 'react-native-svg'
const SearchIcon = props => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill='none'
    {...props}
  >
    <Path
      stroke='#64748B'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='m14 14 2.5 2.5'
    />
    <Path
      stroke='#64748B'
      strokeLinecap='round'
      strokeWidth={1.5}
      d='M16.433 18.525a1.48 1.48 0 1 1 2.092-2.092l3.042 3.042a1.48 1.48 0 1 1-2.092 2.092l-3.042-3.042Z'
    />
    <Path
      stroke='#64748B'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M16 9A7 7 0 1 0 2 9a7 7 0 0 0 14 0Z'
    />
  </Svg>
)
export default SearchIcon
