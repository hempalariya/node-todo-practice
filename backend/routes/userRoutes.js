const express = require('express')
const router = express.Router()
const User = require('../schema')


router.post('/', async (req, res)=>{
    console.log(req.body)
    const response = await User.create(req.body)
    res.send('fir se hello from server')
})


router.get('/', (req, res) => {
    console.log('hello from server')
    res.send('hello form sever')
})


router.post('/login', async (req, res) => {
    const {email, password} = req.body
    const userFound = await User.findOne({email})
    console.log(userFound)
    if(!userFound) {
        console.log('wrong')
    }

    if(password !== userFound.password){
        console.log('wrong pass')
        return
    }

    console.log('userFound')
})


module.exports = router     