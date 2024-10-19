import { useState } from 'react'
import { useSession } from '../context/SessionProvider.js'
import { router, Link } from 'expo-router'

import Button from '../components/Button.jsx'
import FormInput from '../components/Input.jsx'

import {
  Container,
  Wrapper,
  Title,
  InputsContainer,
  ForgotLink,
  Divider,
  Line,
  OrText,
  RegisterLink,
  RegisterText
} from './styles/login.js'
import { logIn } from '../api/user.js'
import PopUp from '../components/PopUp.jsx'

const Login = () => {
  const { signIn } = useSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputEmpty = !email && !password

  const [loading, setLoading] = useState(false)
  const [popUpShown, setPopUpShown] = useState(false)

  const handleSubmit = async () => {
    try {
      setLoading(true)
      const session = (await logIn({ email: email.trim(), password })).userId
      setPopUpShown(false)

      await signIn(session)
      setLoading(false)
      router.replace('/')
    } catch (error) {
      setLoading(false)
      setPassword('')
      if (error.response.status === 400) {
        setPopUpShown(true)
        console.log('handled')
        return
      }
    }
  }

  return (
    <Container>
      <PopUp
        message='Correo o contraseña incorrectos. Por favor, inténtelo de nuevo.'
        visible={popUpShown}
      />
      <Wrapper>
        <Title>Iniciar sesión</Title>
        <InputsContainer>
          <FormInput type='email' value={email} onChangeText={setEmail} />
          <FormInput
            type='password'
            value={password}
            onChangeText={setPassword}
          />
        </InputsContainer>
        <ForgotLink as={Link} href='/forgot-password'>
          ¿Has olvidado la contraseña?
        </ForgotLink>
        <Button onPress={handleSubmit} loading={loading} disabled={inputEmpty}>
          Acceder
        </Button>
        <Divider>
          <Line />
          <OrText>O</OrText>
          <Line />
        </Divider>
        <RegisterText>
          ¿No tienes una cuenta?{' '}
          <RegisterLink as={Link} href='/register'>
            Regístrate
          </RegisterLink>
        </RegisterText>
      </Wrapper>
    </Container>
  )
}

export default Login
