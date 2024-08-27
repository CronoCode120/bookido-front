import { View } from 'react-native'

const Screen = ({ children }) => (
  <View
    style={{
      flex: 1,
      paddingHorizontal: 14,
      backgroundColor: 'white'
    }}
  >
    {children}
  </View>
)

export default Screen
