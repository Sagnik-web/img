const mongoose = require('mongoose')

const user = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
        },
        password: {
          type: String,
          required: true,
        },
        isContributor: {
          type: Boolean,
          default: false,
        },
        isAdmin: {
          type: Boolean,
          default: false,
        },
        seenNotifications: {
          type: Array,
          default: [],
        },
        unseenNotifications: {
          type: Array,
          default: [],
        },
      },
      {
        timestamps: true,
      }
)

module.exports = mongoose.model('users',user)



