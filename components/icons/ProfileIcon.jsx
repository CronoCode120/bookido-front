import Svg, { Path } from 'react-native-svg'
const ProfileIcon = ({ selected, selectColor, ...props }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill={selected ? selectColor : 'none'}
    {...props}
  >
    <Path
      stroke={selected ? selectColor : '#1F1F1F'}
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
      d='M6.578 15.482c-1.415.842-5.125 2.562-2.865 4.715C4.816 21.248 6.045 22 7.59 22h8.818c1.546 0 2.775-.752 3.878-1.803 2.26-2.153-1.45-3.873-2.865-4.715a10.663 10.663 0 0 0-10.844 0Z'
    />
    <Path
      stroke={selected ? selectColor : '#1F1F1F'}
      strokeWidth={1.5}
      d='M16.5 6.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z'
    />
  </Svg>
)
export default ProfileIcon
