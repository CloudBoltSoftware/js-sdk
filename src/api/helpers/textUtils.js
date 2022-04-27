export const toCamelCase = (str) => {
  // Returns the camelCase version of a kebab-case or snake_case string
  return str.replaceAll(/[-_]([a-z])/gi, ($1) => {
    return $1.toUpperCase().slice(1)
  })
}

export const camelCaseKeys = (obj) => {
  // Recursive function to turn all keys in an object to camelCase
  // Handles arbitrary nesting of objects and arrays, but not circular references
  if (Array.isArray(obj)) {
    return obj.map((item) => camelCaseKeys(item))
  } else if (typeof obj === 'object') {
    const entries = Object.entries(obj)
    const camelCaseEntries = entries.map(([key, value]) => [
      toCamelCase(key),
      camelCaseKeys(value)
    ])
    const newObj = Object.fromEntries(camelCaseEntries)
    return newObj
  } else {
    return obj
  }
}

export default {
  toCamelCase,
  camelCaseKeys
}
