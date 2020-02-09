
import * as shell from "shelljs";

shell.cd('my_modules')

shell.exec('tsc')
shell.cp("src/common/package.json", "lib/common");

shell.cd('..')
shell.exec('yarn add ./my_modules/lib/common')

try {
  const res = shell.cd('../zw_backstage')
  shell.exec('yarn add ../zw_server_api/my_modules/lib/common')
  shell.exec('yarn add ../zw_server_api/my_modules/ts_self')
} catch (e) {
  console.log(e)
}


