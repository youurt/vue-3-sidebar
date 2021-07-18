const kebabCase = (string?: string | undefined) => {
  if (typeof string !== 'string') return ''
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export default kebabCase
