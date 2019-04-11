import { registerFont, createCanvas, loadImage } from 'canvas'
import { resolveApp } from './pathConfig'

registerFont(resolveApp('src/assets/fonts/tianyingzhang.ttf'), { family: 'tianyingzhang' })
const n = 4
const width = 375 * n
const height = 60 * n
const fontSize = 25 * n

export const getImg = (text = '小胖子 哈哈哈', option = {}) => {
  return new Promise((resolve) => {
    const lHeight = ~~option.height || height
    const lWidth = ~~option.width || width
    const lFontSize = ~~option.fontSize || fontSize
    const num = lWidth / lFontSize
    const line = Math.ceil(text.length / num)
    const canvas = createCanvas(lWidth, lHeight * line)
    const ctx = canvas.getContext('2d')
    ctx.font = lFontSize + 'px tianyingzhang'
    ctx.clearRect(0, 0, lWidth, lHeight)
    ;[...Array(line).keys()].reduce(({ n }, e) => {
      ctx.fillText(text.slice(n * num, (n + 1) * num), 0, lHeight / 2 + n * lHeight)
      return { n: n + 1 }
    }, { n: 0 })
    resolve({
      src: canvas.toDataURL(),
    })
  })
}

export default {
  getImg
}
