const mongoose = require('mongoose')

const order = new mongoose.Schema({
    img:mongoose.Types.ObjectId,
    user:mongoose.Types.ObjectId,
    img_name:String
})

module.exports = order
