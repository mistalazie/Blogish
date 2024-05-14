require('dotenv').config()

const mongoose = require("mongoose")


mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection

//Here I was writing mongoose.connection(), which means that mongoose.connection() is a function, which is not right and we called mongoose library and we are using instances from it and not functions

db.on('error', (error) => {console.log(error)})
db.once('connected', () => {console.log("Database is running")})

const signupSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    }
})

const postSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true,
    }, 
    category: {
        type: String,
        required: true
    }
})

const Post = mongoose.model('Post', postSchema)
const User = mongoose.model('User', signupSchema)

module.exports = { User, Post }