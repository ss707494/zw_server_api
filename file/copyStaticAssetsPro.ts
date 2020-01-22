
import * as shell from "shelljs";

shell.rm('-rf', 'dist/schema')

shell.mkdir('-p', 'dist/schema')

shell.cp("-Rf", "src/schema", "dist");
shell.cp("-Rf", "src/assets", "dist");
