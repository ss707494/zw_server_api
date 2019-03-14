import fs from 'fs'
import path from 'path'

export const distPath = process.env.NODE_ENV === 'production'? 'dist' : 'src'

export const join = path.join

export const appDirectory = fs.realpathSync(process.cwd());
export const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
