
exports.adminAccess = (req,res,next)=>{
        if(req.user.isAdmin){
            next()
        }
        else{
            return res.status(400).json({
                msg:"You are not allowed "
            })
        }
    }



    exports.contributorAccess = (req,res,next)=>{
        // console.log(req.user);
        if(req.user.isContributor){
            next()
        }
        else{
            return res.status(400).json({
                msg:"You are not allowed "
            })
        }
    }

