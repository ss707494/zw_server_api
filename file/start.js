
var shelljs = require('shelljs')

shelljs.exec('npm run tsBuild && npm run startTsPro', function(code, stdot, stderr) {
  console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
})



