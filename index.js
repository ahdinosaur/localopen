// const { exec } = require('child_process')
const Uri = require('uri-js')
const QueryString = require('query-string')

module.exports = Opener

function Opener (config) {
  const handlers = Object.keys(config).map(key => {
    return [parseUri(key), config[key]]
  })

  return function open (uri) {
    const parsedUri = parseUri(uri)
    const handler = handlers.find(([matcher, _]) => {
      return matches(matcher, parsedUri)
    })
    if (handler == null) {
      throw new Error('localopen: no match!')
    } else {
      const [_, command] = handler
      return `${command} --open ${uri}`
    }
  }
}

function parseUri (uri) {
  var parsedUri = Uri.parse(uri)
  parsedUri.query = QueryString.parse(parsedUri.query)
  return parsedUri
}

function matches (matcher, parsedUri) {
  return Object.keys(matcher).every(key => {
    const expected = matcher[key]
    const value = parsedUri[key]

    switch (typeof value) {
      case 'string':
        return value.startsWith(expected)
      case 'object':
        return Object.keys(expected).every(queryKey => {
          return expected[queryKey] === value[queryKey]
        })
      default:
        return expected == value
    }
  })
}
