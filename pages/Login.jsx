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

const Login = () => {
  const { signIn } = useSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputEmpty = !email && !password

  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await signIn(email.trim(), password)
    setLoading(false)
    router.replace('/')
  }

  return (
    <Container>
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
