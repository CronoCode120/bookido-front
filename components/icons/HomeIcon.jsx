import Svg, { Path } from 'react-native-svg'

const HomeIcon = ({ selected, selectColor, ...props }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={24}
    height={24}
    fill={selected ? selectColor : 'none'}
    {...props}
  >
    <Path
      stroke={selected ? selectColor : '#1F1F1F'}
      strokeMiterlimit={5.759}
      strokeWidth={1.5}
      d='m7.088 4.764-1 .78C4.572 6.73 4 7.5 3.407 8.157 3 8.991 3 9.956 3 11.885v2.092c0 3.786 0 5.68 1.172 6.855C5.115 21.78 6.52 21.965 9 22v-3.994c0-.932 0-1.398.152-1.766a2 2 0 0 1 1.083-1.082c.367-.152.833-.152 1.765-.152.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.082c.152.368.152.834.152 1.766V22c2.48-.036 3.885-.22 4.828-1.168C21 19.657 21 17.764 21 13.977v-2.092c0-1.93 0-2.894-.407-3.729C20 7.5 19.428 6.729 17.912 5.545l-1-.781C14.552 2.92 13.372 2 12 2c-1.372 0-2.552.921-4.912 2.764Z'
    />
  </Svg>
)
export default HomeIcon
