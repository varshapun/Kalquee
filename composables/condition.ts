export const hasValue = (field) => {
  return field !== null && typeof field !== 'undefined'
}

export const isBooleanTrue = value =>
  hasValue(value)
  && (value === 'YES' || value === 'yes' || value === 1 || value === true)

export const hasLength = (field) => {
  return field && field.length !== 0 && typeof field === 'object'
}

export const hasObjectLength = (field) => {
  return field && Object.keys(field).length !== 0
}

export const hasTextLength = (string) => {
  if (!string || !hasValue(string) || string.length === 0)
    return false

  return true
}

export const hasNumber = (string) => {
  return /\d/.test(string)
}
