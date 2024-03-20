

export const utils = {
  isArray: (fields) => {
    return hasValue(fields) && hasLength(fields)
  },

  isEmpty: (fields) => {
    return !hasValue(fields) || !hasLength(fields)
  },

  arrayData: (data) => {
    return !utils.isEmpty(data) ? data : []
  },

  isImageFile: (fileType) => {
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png']

    return validImageTypes.includes(fileType)
  },

  mergeSettings: (target, source) => {
    Object.keys(source)?.forEach((key) => {
      if (key in target)
        target[key] = source[key]
    })
  },
  

  hasTextLength: (string) => {
    if (!string || !hasValue(string) || string.length === 0)
      return false

    return true
  },
  fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea')
    textArea.value = text
    // Avoid scrolling to bottom
    textArea.style.top = '0'
    textArea.style.left = '0'
    textArea.style.position = 'fixed'
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      const successful = document.execCommand('copy')
      const msg = successful ? 'successful' : 'unsuccessful'
      console.log(`Fallback: Copying text command was ${msg}`)
    }
    catch (err) {
      console.error('Fallback: Oops, unable to copy', err)
    }
    document.body.removeChild(textArea)
  },
  copyTextToClipboard(text) {
    if (!navigator.clipboard) {
      this.fallbackCopyTextToClipboard(text)
      return
    }
    navigator.clipboard.writeText(text).then(
      () => {
        return true
      },
      (err) => {
        return false
      },
    )
  },

  toFormData(object) {
    const formData = new FormData()

    Object.keys(object).forEach((key) => {
      if (object[key] && object[key].length && object[key][0] instanceof File) {
        for (let index = 0; index < object[key].length; index++)
          formData.append(`${key}[]`, object[key][index])
      }
      else if (isArray(object[key])) {
        formData.append(key, JSON.stringify(object[key]))
      }
      else {
        // Convert null to empty strings (because formData does not support null values and converts it to string)
        if (object[key] === null)
          object[key] = ''

        formData.append(key, object[key])
      }
    })

    return formData
  },


}
