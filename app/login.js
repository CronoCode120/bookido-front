import { useState } from 'react'
import { useSession } from '../context/SessionProvider.js'
import { Link, router } from 'expo-router'

import Button from '../components/Button.jsx'

import styled from 'styled-components/native'
import FormInput from '../components/Input.jsx'

const Login = () => {
  const { signIn } = useSession()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async () => {
    await signIn(email.trim(), password)
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
        <Button onPress={handleSubmit}>Acceder</Button>
        <Divider>
          <Line />
          <OrText>O</OrText>
          <Line />
        </Divider>
        <RegisterText>
          ¿No tienes una cuenta?{' '}
          <RegisterLink href='/register'>Regístrate</RegisterLink>
        </RegisterText>
      </Wrapper>
    </Container>
  )
}

export default Login

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`

const Wrapper = styled.View`
  align-self: stretch;
  justify-content: center;
  margin: auto;
  width: 100%;
  max-width: 312px;
`

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.CALISTOGA};
  font-size: 24px;
  margin-bottom: 28px;
`

const InputsContainer = styled.View`
  gap: 20px;
`

const StyledText = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.NEUTRAL_500};
`

const ForgotLink = styled(StyledText)`
  margin-top: 8px;
  margin-bottom: 30px;
  align-self: flex-end;
`

const Divider = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 25px;
  margin: 30px 0;
`

const Line = styled.View`
  width: 94px;
  height: 1px;
  background: ${({ theme }) => theme.colors.NEUTRAL_300};
`

const OrText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.NEUTRAL_400};
`

const RegisterText = styled(StyledText)`
  text-align: center;
`

const RegisterLink = styled(Link)`
  font-weight: 600;
  text-decoration: underline;
`
