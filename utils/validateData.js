export const validateUsername = input => {
  const username = input.trim()
  const result = { valid: false, value: '' }
  if (username.length < 5) {
    result.value = 'El nombre de usuario debe contener al menos 5 caracteres.'
  } else {
    result.valid = true
    result.value = username
  }
  return result
}

export const validateEmail = input => {
  const email = input.trim()
  const result = { valid: false, value: '' }
  if (!email.length) {
    result.value = 'Añade un correo electrónico.'
  } else {
    result.valid = true
    result.value = email
  }
  return result
}

export const validatePassword = (input, repeat) => {
  const password = input.trim()
  const confirmPassword = repeat.trim()
  const result = { valid: false, value: '' }
  if (!password.length) {
    result.value = 'La contraseña debe contener al menos 6 caracteres.'
  } else if (password !== confirmPassword) {
    result.value = 'Las contraseñas no coinciden.'
  } else {
    result.valid = true
    result.value = password
  }
  return result
}
