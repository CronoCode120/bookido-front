import { useEffect, useState } from 'react'
import { useSession } from '../../../context/SessionProvider.js'
import { getUserById } from '../../../api/user.js'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import theme from '../../../theme.js'

const ProfileScreen = () => {
  const { signOut, session } = useSession()
  const { top } = useSafeAreaInsets()

  const [{ username, email }, setUser] = useState({
    username: '...',
    email: '...'
  })

  useEffect(() => {
    getUserById(session).then(data => setUser(data.user))
  }, [])

  return (
    <ScrollView style={[styles.container, { paddingTop: top }]}>
      <View style={styles.header}>
        <Text style={styles.profileName}>{username}</Text>
        <Text style={styles.profileEmail}>{email}</Text>
        <Text style={styles.profileCompletion}>Perfil al 70%</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>General</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Editar perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Preferencias de lectura</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Libros archivados</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Soporte</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Política de privacidad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Ayuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={signOut}>
          <Text style={[styles.optionText, styles.logoutText]}>
            Cerrar sesión
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.premiumButton}>
        <Text style={styles.premiumButtonText}>Vuélvete Premium</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5'
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    fontFamily: theme.fonts.HEADING
  },
  profileEmail: {
    color: '#777',
    marginTop: 5
  },
  profileCompletion: {
    color: 'red',
    marginTop: 5
  },
  section: {
    marginVertical: 10,
    paddingHorizontal: 20
  },
  sectionTitle: {
    color: '#888',
    marginBottom: 10
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  optionText: {
    fontSize: 16
  },
  logoutText: {
    color: 'red'
  },
  premiumButton: {
    margin: 20,
    padding: 15,
    backgroundColor: '#007bff',
    alignItems: 'center',
    borderRadius: 5
  },
  premiumButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default ProfileScreen
