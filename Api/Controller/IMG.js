const IMG = require("../Model/IMG")

exports.createIMG = async(req,res,next)=>{

    if(!req.user.isContributor){
        return res.status(400).json({
            success:false,
            msg:"You are not allowed to Upload Image"
        })
    }

    const imgDetails = await IMG.create({...req.body,user:req.user._id})

    res.status(200).json({
        success:true,
        imgDetails
    })
}

// Get ALL IMG
exports.getAllIMG = async(req,res,next)=>{
    const imgDetails =await IMG.find()

    res.status(200).json({
        success:true,
        imgDetails
    })
} 


// Get Single Img
exports.getIMG = async(req,res,next)=>{
    const {imgID} = req.body
    const imgDetails = await IMG.findById(imgID)

    res.status(200).json({
        success:true,
        imgDetails
    })
} 


exports.updateIMG = async(req,res,next)=>{
    const {imgID,title,type_img,desc} = req.body

    const imgDetails = await IMG.findByIdAndUpdate(imgID,{title,type_img,desc},{new:true})

    res.status(200).json({
        success:true,
        imgDetails
    })    
} 


exports.deleteIMG = async(req,res,next)=>{
    const {imgID} = req.body
    const imgDetails = await IMG.findByIdAndDelete(imgID)

    res.status(200).json({
        success:true,
        msg:"Img Deleted Successfully"
    })
} 



exports.getContributorIMG = async(req,res,next)=>{
    const imgDetails =await IMG.find({user:req.user._id})
    console.log(req.user);

    res.status(200).json({
        success:true,
        imgDetails
    })
} 


