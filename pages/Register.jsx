import { useState } from 'react'
import FormInput from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import {
  BackBtn,
  Container,
  InputsContainer,
  RegisterText,
  TermsText,
  Title,
  Wrapper
} from './styles/login.js'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')

  const { top, bottom } = useSafeAreaInsets()

  return (
    <Container style={{ paddingTop: top, paddingBottom: bottom }}>
      <BackBtn top={top + 16} left={24} />
      <Wrapper>
        <Title>Crear una cuenta</Title>
        <InputsContainer style={{ marginBottom: 26 }}>
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
          />
        </InputsContainer>
        <Button>Crear cuenta</Button>
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
