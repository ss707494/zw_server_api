import { registerFont, createCanvas, loadImage } from 'canvas'
import { resolveApp } from './pathConfig'

registerFont(resolveApp('src/assets/fonts/tianyingzhang.ttf'), { family: 'tianyingzhang' })
const width = 375
const height = 60

export const getImg = (text = '小胖子 哈哈哈', option = {}) => {
  return new Promise((resolve) => {
    const lHeight = ~~option.height || height
    const lWidth = ~~option.width || width
    const lFontSize = ~~option.fontSize || 25
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
