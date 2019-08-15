// import { registerFont, createCanvas, loadImage } from 'canvas'
// import { resolveApp } from './pathConfig'
//
// registerFont(resolveApp('src/assets/fonts/tianyingzhang.ttf'), { family: 'tianyingzhang' })
//
// export const getImg = (text = '小胖子 哈哈哈', option = {}) => {
//   const n = ~~option.zoom || 4
//   const width = (~~option.width || 375) * n
//   const fontSize = (~~option.fontSize || 25) * n
//   const height = (~~option.height || (fontSize / n + 20)) * n
//   return new Promise((resolve) => {
//     const lHeight = height
//     const lWidth = width
//     const lFontSize = fontSize
//     const num = Math.floor(lWidth / lFontSize)
//     const line = Math.ceil(text.length / num)
//     const canvas = createCanvas(lWidth, lHeight * line)
//     const ctx = canvas.getContext('2d')
//     ctx.font = lFontSize + 'px tianyingzhang'
//     ctx.clearRect(0, 0, lWidth, lHeight)
//     ;[...Array(line).keys()].reduce(({ n }, e) => {
//       ctx.fillText(text.slice(n * num, (n + 1) * num), 0, lHeight - 10 + n * lHeight)
//       return { n: n + 1 }
//     }, { n: 0 })
//     resolve({
//       src: canvas.toDataURL(),
//     })
//   })
// }
//
// export default {
//   getImg
// }
