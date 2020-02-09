import * as shell from "shelljs";

shell.cp("src/my_modules/common/package.json", "dist/my_modules/common");

shell.cd('my_modules')
