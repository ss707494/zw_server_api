var shelljs = require('shelljs')

function callback (code, stdout, stderr) {
  console.log('Exit code:', code)
  console.log('Program output:', stdout)
  console.log('Program stderr:', stderr)
}

shelljs.exec('git pull')
shelljs.cd('./client_build')

shelljs.exec('npm run prod_start', {windowsHide: true}, callback)



