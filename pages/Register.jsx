import { useState } from 'react'
import FormInput from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {
  validateEmail,
  validatePassword,
  validateUsername
} from '../utils/validateData.js'
import { register } from '../api/user.js'
import {
  BackBtn,
  Container,
  InputsContainer,
  RegisterText,
  TermsText,
  Title,
  Wrapper
} from './styles/login.js'
import { router } from 'expo-router'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const { top, bottom } = useSafeAreaInsets()

  const registerUser = async () => {
    const usernameData = validateUsername(username)
    const emailData = validateEmail(email)
    const passwordData = validatePassword(password, confirm)

    if (!usernameData.valid) return console.log(usernameData.value)
    if (!emailData.valid) return console.log(emailData.value)
    if (!passwordData.valid) return console.log(passwordData.value)

    const res = await register({
      username: usernameData.value,
      email: emailData.value,
      password: passwordData.value
    })

    console.log(res)
    router.back()
  }

  return (
    <Container style={{ paddingTop: top, paddingBottom: bottom }}>
      <BackBtn top={top + 16} left={24} />
      <Wrapper>
        <Title>Crear una cuenta</Title>
        <InputsContainer style={{ marginBottom: 26 }}>
          <FormInput
            type='username'
            value={username}
            onChangeText={setUsername}
          />
          <FormInput type='email' value={email} onChangeText={setEmail} />
          <FormInput
            type='password'
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            type='repeat-pwd'
            value={confirm}
            onChangeText={setConfirm}
            onSubmit={registerUser}
          />
        </InputsContainer>
        <Button onPress={registerUser}>Crear cuenta</Button>
        <RegisterText>
          Al crear una cuenta, aceptas los{' '}
          <TermsText>Términos de Uso</TermsText> y la{' '}
          <TermsText>Política de Privacidad</TermsText>.
        </RegisterText>
      </Wrapper>
    </Container>
  )
}

export default Register
