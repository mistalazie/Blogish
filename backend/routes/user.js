

const authMiddleware = require('./authMiddleware')
const { signupSchema, signinSchema } = require("../types")
const { User } = require("../db")
const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config/config')


const express = require("express");

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('working user route')
})

//create user
router.post('/signup', async (req, res) => {
    const {success} = signupSchema.safeParse(req.body)
    if(!success) {
        return res.status(403).json({msg: 'Invalid inputs'});
    }
    const findUser = await User.findOne({
        username: req.body.username
    })

    if(findUser) {
        return res.send("user exists")
    }
    try { 
        const newUser = await User.create({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })
        const userId = newUser._id
        const token = jwt.sign({userId}, JWT_SECRET)
        res.status(200).json({msg: "signed in", token})
    } catch(error) {
        console.error('Error while creating user:', error);
        res.status(403).json({msg: "Error while creating user"})
    }
})

//log in user
router.post('/signin', async (req, res) => {
    const {success} = signinSchema.safeParse(req.body);
    if(!success) {
        return res.status(403).json({msg: "Invalid inputs"});
    }
    
    const findUser = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    
    try{ 
        if(!findUser) {
            return res.status(411).json({msg: "Incorrect credentials"})
        }
        
        const userId = findUser._id;
        console.log(JWT_SECRET)
    
        const token = jwt.sign({userId}, JWT_SECRET);
        
        res.status(200).json({msg: "Sign-in successful", token});
    } catch(error) {
        console.error('Error while signing-in user:', error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
})

module.exports = router