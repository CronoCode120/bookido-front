import { View } from 'react-native'

const Screen = ({ style = {}, children }) => (
  <View
    style={{
      ...style,
      flex: 1,
      paddingHorizontal: 14,
      backgroundColor: 'white'
    }}
  >
    {children}
  </View>
)

export default Screen
