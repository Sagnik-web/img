const multer = require('multer')

const storageImgEngine = multer.diskStorage({

    destination: "./IMG_Save/IMG",
    filename: (req, file, cb) => {
       let name = `${Date.now()}--${file.originalname}`
        req.fileOriginalName = name
      cb(null, name);
    },
  });



  const storageSvgEngine = multer.diskStorage({

    destination: "./IMG_Save/SVG",
    filename: (req, file, cb) => {
       let name = `${Date.now()}--${file.originalname}`
        req.fileOriginalName = name
      cb(null, name);
    },
  });
 

const uploadImg = multer({
    storage:storageImgEngine
})


  
const uploadSvg = multer({
    storage:storageSvgEngine
})


module.exports = {uploadImg,uploadSvg}