import { InputWrapper, StyledText, Input } from './styles/FormInput'

const inputProps = {
  email: {
    inputMode: 'email',
    autoComplete: 'email',
    autoCorrect: false,
    placeholder: 'ejemplo@mail.com'
  }
}

const FormInput = () => {
  return (
    <InputWrapper>
      <StyledText>Correo electrónico</StyledText>
      <Input {...inputProps.email} />
    </InputWrapper>
  )
}

export default FormInput
