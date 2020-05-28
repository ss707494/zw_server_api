var shelljs = require('shelljs')

function callback (code, stdout, stderr) {
  console.log('Exit code:', code)
  console.log('Program output:', stdout)
  console.log('Program stderr:', stderr)
}

shelljs.exec('git pull')
shelljs.exec('npm run eTs', {windowsHide: true})
shelljs.exec('npm run copyStaticAssets', {windowsHide: true})
shelljs.exec('npm run startServerJs', {windowsHide: true}, callback)



