
import * as shell from "shelljs";

shell.cp("-Rf", "src/**/*.graphql", "dist/schema");
shell.cp("-Rf", "src/assets", "dist");
