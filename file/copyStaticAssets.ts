
import * as shell from "shelljs";
import fs from "fs"

if (!fs.existsSync('dist/schema')) {
  fs.mkdirSync('dist/schema')
}

shell.cp("-Rf", "src/**/*.graphql", "dist/schema");
shell.cp("-Rf", "src/assets", "dist");
