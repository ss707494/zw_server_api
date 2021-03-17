import * as shell from 'shelljs'
import * as fs from 'fs'

const outDir = '../deploy/dist/apiDist'

if (!fs.existsSync(outDir + '/schema')) {
  console.log('make schema')
  fs.mkdirSync(outDir + '/schema')
}

const fsCall = err => {
  if (err) throw err
}
fs.copyFile('file/newDeploy/ecosystem.config.js', outDir + '/../ecosystem.config.js', fsCall)
fs.copyFile('file/newDeploy/package.json', outDir + '/../package.json', fsCall)
fs.copyFile('ormconfig.json', outDir + '/../ormconfig.json', fsCall)

shell.cp('-Rf', 'src/**/*.graphql', outDir + '/schema')
shell.cp('-Rf', 'src/assets', outDir + '')
