const contributor = require("../Model/Contributor")
const User = require("../Model/User")


exports.createcontributor = async(req,res,next)=>{
    
    const contributorDetails = await contributor.create({...req.body,user:req.user._id})
    const user = await User.findByIdAndUpdate(req.user._id,{isContributor:true},{new:true})

    // console.log(res.user);
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


exports.deletecontributor = async(req,res,next)=>{
    const {contributorID} = req.body
    const contributorDetails = await contributor.findByIdAndDelete(contributorID)

    res.status(200).json({
        success:true,
        msg:"contributor Deleted Successfully"
    })
} 


