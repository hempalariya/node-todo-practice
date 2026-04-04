const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/userRoutes')
const app = express()
app.use(cors())

const url = 'mongodb+srv://mahimasunal1234_db_user:A9hyuIaLoeyafJMO@cluster0.jf6db1j.mongodb.net/?appName=Cluster0'


mongoose.connect(url).then(console.log('connected'))

app.use(express.json())

app.use('/user', router)


app.listen(5000, () => {
    console.log('listening')
})

