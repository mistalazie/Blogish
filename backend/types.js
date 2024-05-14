const zod = require('zod');

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
})

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

const postSchema = zod.object({
    title: zod.string(),
    description: zod.string(),
    category: zod.string()
})

const updatePostSchema = zod.object({
    title: zod.string().optional(),
    description: zod.string().optional(),
    category: zod.string().optional()
})

module.exports = {signupSchema, signinSchema, postSchema, updatePostSchema}