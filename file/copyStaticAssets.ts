
import * as shell from "shelljs";

shell.cp("-Rf", "src/schema/*", "dist/schema");
shell.cp("-Rf", "src/assets", "dist");
