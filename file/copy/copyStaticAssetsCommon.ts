import * as shell from "shelljs";

shell.cp("src/node_modules_self/common/package.json", "dist/node_modules_self/common");

shell.cd('node_modules_self')
