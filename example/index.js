const Opener = require('../')

const config = require('./config')
const opener = Opener(config)

const uris = [
  "ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=",
  "ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=?type=post",
  "ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=?type=gathering",
  "ssb:message:sha256:g3hPVPDEO1Aj_uPl0-J2NlhFB2bbFLIHlty-YuqFZ3w=?type=chess_invite",
  "dat:abcdef123"
]

console.log("config:")
console.log(JSON.stringify(config, null, 2))
console.log()

uris.forEach(uri => {
  console.log(`localopen "${uri}"`)
  const command = opener(uri)
  console.log(`--> ${command}`)
})
