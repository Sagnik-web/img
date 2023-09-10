const express = require('express')
const { createcontributor, getcontributor, updatecontributor, deletecontributor } = require('../Controller/Contributor')
const authMiddleware = require('../Middleware/authMiddleware')
const { contributorAccess } = require('../Middleware/accessMiddleware')
const contributor = express.Router()

contributor.route('/')
            .post(authMiddleware,createcontributor)
            .patch(authMiddleware,contributorAccess,updatecontributor)
            .delete(authMiddleware,contributorAccess,deletecontributor)

            
contributor.route('/:contributorID')
            .get(authMiddleware,contributorAccess,getcontributor)
            

module.exports = contributor
