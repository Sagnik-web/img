





// ---------------------------- Contributor -------------------------------------------

const contributor = require("../Model/Contributor")

// Get ALL contributor
exports.getAllcontributor = async(req,res,next)=>{
    const contributorDetails =await contributor.find()

    res.status(200).json({
        success:true,
        contributorDetails
    })
} 


// Get Single contributor
exports.getcontributor = async(req,res,next)=>{
    const {contributorID} = req.params
    const contributorDetails = await contributor.findById(contributorID)

    res.status(200).json({
        success:true,
        contributorDetails
    })
} 


exports.updatecontributor = async(req,res,next)=>{
    const {contributorID,title,type_contributor,desc} = req.body

    const contributorDetails = await contributor.findByIdAndUpdate(contributorID,req.body,{new:true})

    res.status(200).json({
        success:true,
        contributorDetails
    })    
} 




exports.updatecontributorStatus = async(req,res,next)=>{
    const {contributorID,status} = req.body

    const contributorDetails = await contributor.findByIdAndUpdate(contributorID,{status:status},{new:true})


    res.status(200).json({
        success:true,
        contributorDetails
    })    
} 




exports.deletecontributor = async(req,res,next)=>{
    const {contributorID} = req.body
    const contributorDetails = await contributor.findByIdAndDelete(contributorID)

    res.status(200).json({
        success:true,
        msg:"contributor Deleted Successfully"
    })
} 

// ------------------------------------------------------ contributor --------------------------------------------------




// ------------------------------------------------------- IMG ----------------------------------------------------------
const IMG = require("../Model/IMG")
const User = require("../Model/User")

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
 

// ------------------------------------------------------------ IMG ----------------------------------------------------------


//---------------------------------------------------------- USER ---------------------------------------------------

exports.getAllUser = async(req,res)=>{
    const user = await User.find()

    res.status(200).json({
        success:true,
        user
    })
}








//---------------------------------------------------------- USER ---------------------------------------------------


