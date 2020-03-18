
var shelljs = require('shelljs')

function callback (code, stdout, stderr) {
  console.log('Exit code:', code)
  console.log('Program output:', stdout)
  console.log('Program stderr:', stderr)
}
shelljs.exec('tsc', {windowsHide: true})
shelljs.exec('ts-node file/copyStaticAssets.ts', {windowsHide: true})
shelljs.exec('cross-env NODE_ENV=production node dist/server.js', {windowsHide: true}, callback)



