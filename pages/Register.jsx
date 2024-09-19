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

  const insets = useSafeAreaInsets()

  return (
    <Container style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <BackBtn top={insets.top} left={insets.left} />
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
