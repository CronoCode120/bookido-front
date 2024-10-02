import { useState } from 'react'
import { useSession } from '../../../context/SessionProvider.js'
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView
} from 'react-native'

const ProfileScreen = () => {
  const { signOut } = useSession()

  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleToggleSwitch = () => {
    setIsDarkMode(previousState => !previousState)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileImage}>
          <Text style={styles.profileInitial}>J</Text>
        </View>
        <Text style={styles.profileName}>John Doe</Text>
        <Text style={styles.profileEmail}>johndoe@gmail.com</Text>
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
          <Text style={styles.optionText}>Caja de donaciones</Text>
        </TouchableOpacity>
        <View style={styles.option}>
          <Text style={styles.optionText}>Modo oscuro</Text>
          <Switch value={isDarkMode} onValueChange={handleToggleSwitch} />
        </View>
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
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileInitial: {
    color: '#fff',
    fontSize: 40
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10
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
