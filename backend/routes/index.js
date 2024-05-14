const express = require('express');
const userRoute = require('./user')
const postsRoute = require("./posts")

const router = express.Router()

router.get('/', (req, res) => {
    res.send('working router')
})

router.use('/user', userRoute);
router.use('/post', postsRoute);

module.exports = router
