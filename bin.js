const { readFileSync } = require('fs')
const { join } = require('path')
const os = require('os')
const { spawn } = require('child_process')

const Opener = require('./')

const uri = process.argv[2]

if (!uri) {
  console.log(`localopen <uri>`)
} else {
  var config = readConfigSync()
  var opener = Opener(config)

  try {
    var command = opener(uri)
  } catch (err) {
    if (err.message.startsWith('localopen')) {
      console.log(err.message)
    } else {
      throw err
    }
  }

  if (command != null) {
    spawn(command, ['--open', uri], {
      cwd: process.cwd(),
      stdio: 'inherit'
    })
  }
}

function readConfigSync () {
  const homeDir = os.homedir()
  const configPath = process.env.CONFIG_PATH || join(homeDir, '.config', 'localopen.json')
  var configContent = '{}'
  try {
    configContent = readFileSync(configPath, 'utf8')
  } catch (err) {
    if (err.code !== 'ENOENT') throw err
  }
  var config = JSON.parse(configContent)
  return config
}
