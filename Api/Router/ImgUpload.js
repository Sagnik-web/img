const express = require('express')
const {uploadImg, uploadSvg} = require('../FileUpload/ImgStore')

const ImgRoute = express.Router()

ImgRoute.post('/img',uploadImg.single('img'),(req,res)=>{
    if (req.file) {
        res.status(200).json({
            success:true,
            data:req.fileOriginalName
        })
      } else {
        res.status(400).send("Please upload a valid image");
      }
})


ImgRoute.post('/svg',uploadSvg.single('svg'),(req,res)=>{
    if (req.file) {
        res.status(200).json({
            success:true,
            data:req.fileOriginalName
        })
      } else {
        res.status(400).send("Please upload a valid image");
      }
})

module.exports = ImgRoute