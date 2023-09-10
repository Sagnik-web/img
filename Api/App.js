const express = require('express')
const cors = require('cors')
const auth = require('./Router/Auth')
const img = require('./Router/IMG')
const contributor = require('./Router/Contributor')
const admin = require('./Router/Admin')
const ImgUpload = require('./Router/ImgUpload')
const app = express()


app.use(cors())
app.use(express.json())
app.use('/resources/img',express.static(__dirname + '/IMG_Save/IMG'));

app.use('/api/v1/auth',auth)
app.use('/api/v1/img',img)
app.use('/api/v1/contributor',contributor)
app.use('/api/v1/admin',admin)

app.use('/api/v1/upload',ImgUpload)


module.exports = app