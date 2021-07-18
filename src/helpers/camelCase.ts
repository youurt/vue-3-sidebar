const camelCase = (str?: string | undefined) => {
  if (typeof str !== 'string') return ''
  return str.replace(/\W+(.)/g, function(match, chr) {
    return chr.toUpperCase()
  })
}

export default camelCase
