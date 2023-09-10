const mongoose = require('mongoose')

const IMG = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    type_img:{
        type:String,
        required: true
    },
    desc:{
        type:String,
        required: true
    },
    image_size_format:{
        type:String,
        required: true
    },
    img_watermark_url:{
        type:String,
        // required: true
    },
    img_url:{
        type:String,
        // required: true
    },
    svg_url:{
        type:String,
        // required: true
    },
    user:mongoose.Types.ObjectId
    

})


module.exports = mongoose.model('imgs',IMG)
