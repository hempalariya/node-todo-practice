const express = require('express')
const router = express.Router()


router.post('/user', async (req, res)=>{
    console.log(req.body)
    const response = await User.create(req.body)
    res.send('fir se hello from server')
})
