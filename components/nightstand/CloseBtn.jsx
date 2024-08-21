import { Pressable, StyleSheet, Text } from 'react-native'

const CloseBtn = ({ onPress }) => {
  return (
    <Pressable
      style={{
        ...StyleSheet.absoluteFillObject,
        top: 15,
        justifyContent: 'start',
        alignItems: 'center'
      }}
      onPress={onPress}
    >
      <Text>Cerrar</Text>
    </Pressable>
  )
}

export default CloseBtn
