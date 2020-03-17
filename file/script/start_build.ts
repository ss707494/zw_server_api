import shelljs from 'shelljs'

const callback = (code, stdout, stderr) => {
  console.log('Exit code:', code)
  console.log('Program output:', stdout)
  console.log('Program stderr:', stderr)
}

const main = async () => {
  shelljs.exec('tsc')
  shelljs.exec('ts-node file/copyStaticAssets.ts')
  shelljs.exec('cross-env NODE_ENV=production node dist/server.js', callback)
}

main().then(() => {})
