
import * as shell from "shelljs";

shell.cd('my_modules')

shell.echo('1')
shell.exec('tsc')
shell.cp("src/common/package.json", "lib/common");
shell.echo('2')

shell.cd('..')
shell.exec('yarn upgrade ss_common')
shell.echo('3')

try {
  const res = shell.cd('../zw_backstage')
  shell.echo('4')
  if (res.code === 0) {
    shell.exec('yarn upgrade ss_common @types/ts_self')
    // shell.exec('yarn add ../zw_server_api/my_modules/ts_self')
  }
  shell.cd('../zw_server_api')
  shell.echo('5')
  shell.exit()
} catch (e) {
  console.log(`errrrrrrrorrrrrr:: ${e}`)
}


