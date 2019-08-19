import fs from 'fs'
import { resolveApp, uploadFilePath } from "../src/common/pathConfig";

fs.exists(resolveApp(uploadFilePath), (flag) => {
  console.log(flag)
  if (!flag) {
    fs.mkdirSync(resolveApp(uploadFilePath))
  }
})
