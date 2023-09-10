const express = require('express')
const { createIMG, getAllIMG, updateIMG, deleteIMG, getContributorIMG } = require('../Controller/IMG')
const authMiddleware = require('../Middleware/authMiddleware')
const { contributorAccess } = require('../Middleware/accessMiddleware')

const img = express.Router()

img.route('/')
    .post(authMiddleware,contributorAccess,createIMG)
    .get(getAllIMG)
    .patch(authMiddleware,contributorAccess,updateIMG)
    .delete(authMiddleware,contributorAccess,deleteIMG)

img.route('/contributor')
   .get(authMiddleware,contributorAccess,getContributorIMG)



module.exports = img
