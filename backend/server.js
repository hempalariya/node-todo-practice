require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/userRoutes')
const app = express()
app.use(cors())

mongoose.connect(process.env.URI).then(console.log('connected'))

app.use(express.json())

app.use('/user', router)

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log('listening')
})

