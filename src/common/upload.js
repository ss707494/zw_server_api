// app.use('/fileUpload', upload.single('logo'), function(req, res, next) {
//   var file = req.file;
//
//   console.log('文件类型：%s', file.mimetype);
//   console.log('原始文件名：%s', file.originalname);
//   console.log('文件大小：%s', file.size);
//   console.log('文件保存路径：%s', file.path);
//
//   res.send({ret_code: '0'});
// })
import multer from 'multer'
import { resolveApp, uploadFilePath } from "./pathConfig";

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, resolveApp(uploadFilePath))
  },
  filename: function(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({ storage })

export const dealUpload = (app) => {
  app.use('/api/fileUpload', upload.array('FileData[]', 10), (req, res) => {
    const files = req.files
    files.forEach(file => {
      console.log('文件类型：%s', file.mimetype)
      console.log('原始文件名：%s', file.originalname)
      console.log('文件大小：%s', file.size)
      console.log('文件保存路径：%s', file.path)
    })

    res.send({
      ret_code: JSON.stringify(files),
      files: files.map(file => ({
        mimeType: file.mimetype,
        originalName: file.originalname,
        filePath: file.path,
        url: `${uploadFilePath}/${file.filename}`
      }))
    })
  })
}
