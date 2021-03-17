import shelljs from 'shelljs'

const callback = (code, stdout, stderr) => {
  console.log('Exit code:', code)
  console.log('Program output:', stdout)
  console.log('Program stderr:', stderr)
}

const main = async () => {
  shelljs.exec('tsc')
  shelljs.exec('ts-node file/copyStaticAssets.ts')

  shelljs.exec('nodemon -C -e js,ts --watch src --exec tsc', callback)
  shelljs.exec('nodemon -C -e graphql --watch src --exec ts-node file/copyStaticAssets.ts', callback)

  // shelljs.exec('nodemon -e js,ts,graphql --watch dist --watch package.json --delay 150ms --exec cross-env node dist/server.js', callback)
  shelljs.cd('../deploy/dist')
  shelljs.exec('nodemon -e js,ts,graphql --watch dist --watch package.json --delay 150ms --exec cross-env node ./apiDist/server.js', callback)

}

main().then(() => {})
