const mongoose = require('mongoose')

const contributor = new mongoose.Schema(
    {
        // userId: {
        //   type: String,
        //   required: true,
        // },
        firstName: {
          type: String,
          required: true,
        },
        lastName: {
          type: String,
          required: true,
        },
        email:{
            type:String,
            required: true,
        },
        phoneNumber: {
          type: String,
          required: true,
        },
        website: {
          type: String,
          required: true,
        },
        address: {
          type: String,
          required: true,
        },
        
        status: {
          type: String,
          default: "pending",
        },
        user:mongoose.Types.ObjectId
      },
      {
        timestamps: true,
      }
)

module.exports = mongoose.model('contributors',contributor)

