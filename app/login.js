import { View, Text, TextInput, Pressable } from 'react-native'
import { useSession } from '../context/SessionProvider.js'
import { useState } from 'react'
import { Link, router } from 'expo-router'

const Login = () => {
  const { signIn, session } = useSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await signIn(email.trim(), password)
    router.replace('/')
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text>Login</Text>
      <View>
        <Text>Email</Text>
        <TextInput value={email} onChangeText={text => setEmail(text)} />
      </View>
      <View>
        <Text>Contraseña</Text>
        <TextInput value={password} onChangeText={text => setPassword(text)} />
      </View>
      <Pressable onPress={handleSubmit}>
        <Text>Iniciar sesión</Text>
      </Pressable>
      <Text>
        ¿No tienes una cuenta? <Link href='/register'>Regístrate</Link>.
      </Text>
    </View>
  )
}

export default Login
