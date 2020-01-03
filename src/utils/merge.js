export function deepMerge(target, source) {
  Object.keys(source).forEach(key => {
    const value = source[key]
    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      if (!target[key]) target[key] = {}
      deepMerge(target[key], source[key])
    } else {
      target[key] = source[key]
    }
  })
}
