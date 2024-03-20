export const containsUppercase = (value) => {
  if (!value)
    return true

  return /[A-Z]/.test(value)
}

export const containsLowercase = (value) => {
  if (!value)
    return true

  return /[a-z]/.test(value)
}

export const containsNumber = (value) => {
  if (!value)
    return true

  return /[0-9]/.test(value)
}

export const containsSpecial = (value) => {
  if (!value)
    return true

  return /[#?!@$%^&*-]/.test(value)
}
