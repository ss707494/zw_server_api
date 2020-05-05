
import * as shell from "shelljs";

shell.cd('my_modules')

shell.echo('1')
shell.exec('tsc')
shell.cp("src/common/package.json", "lib/common");
shell.echo('2')

shell.cd('..')
shell.exec('yarn add ./my_modules/lib/common')
shell.echo('3')

try {
  const res = shell.cd('../zw_backstage')
  shell.echo('go to zw_backstage')
  if (res.code === 0) {
    shell.exec('yarn add ../zw_server_api/my_modules/lib/common')
    shell.exec('yarn add ../zw_server_api/my_modules/ts_self')
  }
  shell.cd('../zw_server_api')
  shell.echo('5')

  const res2 = shell.cd('../zw_client_web')
  shell.echo('go to zw_client_web')
  if (res2.code === 0) {
    shell.exec('yarn add ../zw_server_api/my_modules/lib/common')
  }
  shell.cd('../zw_server_api')
  shell.echo('5')
  shell.exit()
} catch (e) {
  console.log(`errrrrrrrorrrrrr:: ${e}`)
}


