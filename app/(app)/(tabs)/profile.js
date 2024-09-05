import Screen from '../../../components/Screen.jsx'
import { useSession } from '../../../context/SessionProvider'
import { Text, View, Pressable } from 'react-native'

const Profile = () => {
  const { signOut } = useSession()

  return (
    <Screen
      style={{
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Perfil</Text>
      <View>
        <Pressable onPress={signOut}>
          <Text>Cerrar sesión</Text>
        </Pressable>
      </View>
    </Screen>
  )
}

export default Profile
