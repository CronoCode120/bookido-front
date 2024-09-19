import { InputWrapper, StyledText, Input } from './styles/FormInput'

const inputProps = {
  email: {
    label: 'Correo electrónico',
    inputMode: 'email',
    autoComplete: 'email',
    autoCorrect: false,
    placeholder: 'ejemplo@mail.com',
    autoCapitalize: 'none'
  },
  password: {
    label: 'Contraseña',
    secureTextEntry: true,
    autoCapitalize: 'none'
  },
  'repeat-pwd': {
    label: 'Confirmar contraseña',
    secureTextEntry: true,
    autoCapitalize: 'none'
  },
  username: {
    label: 'Usuario',
    autoCorrect: false,
    autoComplete: 'username'
  }
}

const FormInput = ({ value, onChangeText, type }) => {
  const { label, ...props } = inputProps[type]

  return (
    <InputWrapper>
      <StyledText>{label}</StyledText>
      <Input
        value={value}
        onChangeText={onChangeText}
        returnKeyType='go'
        {...props}
      />
    </InputWrapper>
  )
}

export default FormInput
