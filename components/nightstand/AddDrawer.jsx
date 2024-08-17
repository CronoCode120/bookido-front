import { Modal, View, Text, Pressable } from 'react-native'

const AddDrawer = ({ visible, toggleDrawer }) => {
  return (
    <Modal
      animationType='slide'
      visible={visible}
      onRequestClose={toggleDrawer}
    >
      <View>
        <Text>Drawer</Text>
      </View>
      <Pressable onPress={toggleDrawer} style={{ padding: 20 }}>
        <Text>XXXX</Text>
      </Pressable>
    </Modal>
  )
}

export default AddDrawer
