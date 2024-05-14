const authMiddleware = require('./authMiddleware');
const { postSchema, updatePostSchema } = require("../types")
const { Post } = require("../db")

const express = require("express");

const router = express.Router();

//Get Posts Routes

router.get('/',async(req, res) => {
    const getPosts = await Post.find({})
    res.status(200).json(getPosts)
})

//Create Route
router.post('/create', authMiddleware, async (req, res) => {
    const { success } = postSchema.safeParse(req.body);
    if (!success) {
        return res.status(403).json({ msg: "Missing details, please review" });
    }
    const newPost = await Post.create({
        title: req.body.title,
        description: req.body.description,
        category: req.body.category
    })
    res.status(200).json({ msg: "Post created successfully", newPost })
})


//Update Route
router.put('/update/:id', authMiddleware, async (req, res) => {
    const postId = req.params.id;
    const { success } = updatePostSchema.safeParse(req.body)
    if (!success) {
        return res.status(411).json({ msg: "Enter information to update" })
    }

    try {
        await Post.findByIdAndUpdate(postId, {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category
        })
        res.status(200).json({ msg: "Post updated" })
    } catch (error) {
        res.status(403).json("error")
        console.log(error)
    }
})


// Delete Route
router.delete('/delete/:id', authMiddleware, async (req, res) => {
    const postId = req.params.id

    try {
        const deletePost = await Post.findByIdAndDelete(postId)
        if (!postId) {
            return res.status(404).json({ msg: "Post not found" })

        }
        res.status(200).json({ msg: "Post deleted successfully!" })

    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
})



// Search Route
router.get('/search', async (req, res) => {
    const searchItem = req.query.filter || "";
    try {
        if (!searchItem) {
            return res.status(400).json({ msg: "Please provide a search query" })
        }
        const searchResults = await Post.find({
            $or: [{
                category: {
                    '$regex': searchItem,
                    '$options': "i"
                }
            }, {
                title: {
                    '$regex': searchItem,
                    '$options': "i"
                }
            }
            ]
        });

        if (searchResults.length === 0) {
            return res.status(404).json({ msg: "No results found" })
        }
        res.json({
            result: searchResults.map(result => ({
                title: result.title,
                description: result.description,
                category: result.category,
                _id: result._id
            }))
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Internal server error" })
    }
})

module.exports = router