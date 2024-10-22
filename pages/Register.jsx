import { useState } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { router } from 'expo-router'
import FormInput from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import PopUp from '../components/PopUp.jsx'
import {
  validateEmail,
  validatePassword,
  validateUsername
} from '../utils/validateData.js'
import {
  BackBtn,
  Container,
  InputsContainer,
  RegisterText,
  TermsText,
  Title,
  Wrapper
} from './styles/login.js'

const Register = () => {
  const { top, bottom } = useSafeAreaInsets()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const [popUpShown, setPopUpShown] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const setPopUp = message => {
    setErrorMsg(message)
    setPopUpShown(true)
    setTimeout(() => setPopUpShown(false), 4000)
  }

  const registerUser = async () => {
    const usernameData = validateUsername(username)
    const emailData = validateEmail(email)
    const passwordData = validatePassword(password, confirm)

    if (!usernameData.valid) return setPopUp(usernameData.value)
    if (!emailData.valid) return setPopUp(emailData.value)
    if (!passwordData.valid) return setPopUp(passwordData.value)

    router.push({
      pathname: 'onboarding',
      params: {
        username: usernameData.value,
        email: emailData.value,
        password: passwordData.value
      }
    })
  }

  return (
    <Container style={{ paddingTop: top, paddingBottom: bottom }}>
      <PopUp message={errorMsg} visible={popUpShown} />
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
