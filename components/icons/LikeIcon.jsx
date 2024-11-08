import Svg, { Path } from 'react-native-svg'
import theme from '../../theme.js'

const LikeIcon = ({ selected, big = false, dark, ...props }) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    width={big ? 32 : 24}
    height={big ? 32 : 24}
    fill={selected ? '#1F1F1F' : 'none'}
    {...props}
  >
    {big ? (
      <>
        <Path
          stroke={dark ? theme.colors.WHITE : '#1F1F1F'}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='M2.65 16.663a2.65 2.65 0 0 1 2.65-2.65 3.975 3.975 0 0 1 3.974 3.975v5.3A3.975 3.975 0 0 1 5.3 27.261a2.65 2.65 0 0 1-2.65-2.65v-7.95Z'
        />
        <Path
          stroke={dark ? theme.colors.WHITE : '#1F1F1F'}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={1.5}
          d='m20.508 10.444-.353 1.14c-.289.933-.433 1.4-.322 1.769.09.298.287.555.556.724.333.21.836.21 1.842.21h.535c3.406 0 5.108 0 5.912 1.007.092.115.174.238.245.367.618 1.124-.085 2.638-1.492 5.667-1.29 2.78-1.936 4.169-3.134 4.987-.117.08-.236.154-.358.224-1.262.723-2.825.723-5.951.723h-.678c-3.788 0-5.682 0-6.859-1.14-1.177-1.14-1.177-2.975-1.177-6.645v-1.29c0-1.929 0-2.893.343-3.776.342-.883.997-1.608 2.308-3.06l5.421-6.003c.136-.15.204-.225.264-.277a1.369 1.369 0 0 1 1.912.12c.052.06.11.143.224.31.18.26.269.39.347.52a5.051 5.051 0 0 1 .59 3.828c-.036.145-.082.295-.175.595Z'
        />
      </>
    ) : (
      <Path
        stroke={dark ? theme.colors.WHITE : '#1F1F1F'}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.4}
        d='M2 12.5a2 2 0 0 1 2-2 3 3 0 0 1 3 3v4a3 3 0 0 1-3 3 2 2 0 0 1-2-2v-6ZM15.479 7.806l-.267.86c-.218.705-.327 1.057-.243 1.336.068.225.217.419.42.547.251.158.63.158 1.39.158h.404c2.57 0 3.855 0 4.462.76.07.087.131.18.185.277.467.848-.064 1.991-1.126 4.277-.974 2.098-1.462 3.147-2.366 3.764-.088.06-.178.116-.27.17-.952.545-2.132.545-4.492.545h-.511c-2.86 0-4.289 0-5.177-.86C7 18.779 7 17.394 7 14.624v-.974c0-1.455 0-2.183.258-2.85.259-.666.753-1.213 1.743-2.309l4.091-4.53c.103-.114.154-.17.2-.21a1.033 1.033 0 0 1 1.442.091c.04.045.083.108.17.234.135.196.202.294.261.392.528.871.687 1.906.446 2.89-.027.109-.062.222-.132.448Z'
      />
    )}
  </Svg>
)
export default LikeIcon
