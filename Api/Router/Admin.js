const express = require('express')
const { getAllcontributor, updatecontributor, deletecontributor, getcontributor, updateIMG, deleteIMG, getAllUser, updatecontributorStatus } = require('../Controller/Admin')
const authMiddleware = require('../Middleware/authMiddleware')
const { adminAccess } = require('../Middleware/accessMiddleware')
const admin = express.Router()

admin.route('/contributor')
     .get(authMiddleware,adminAccess,getAllcontributor)
     .patch(authMiddleware,adminAccess,updatecontributor)
     .delete(authMiddleware,adminAccess,deletecontributor)

admin.route('/contributor/status')
     .patch(authMiddleware,adminAccess,updatecontributorStatus)



admin.route('/contributor/:contributorID')
     .get(authMiddleware,adminAccess,getcontributor)


admin.route('/img')
     .patch(authMiddleware,adminAccess,updateIMG)
     .delete(authMiddleware,adminAccess,deleteIMG)

admin.route('/user')
     .get(authMiddleware,adminAccess,getAllUser)
     

module.exports = admin


