const PostMessage = require('../models/postMemory')

const getPost = async (req, res, next) => {   
    try {
        const postMessages = await PostMessage.find();
        console.log('iam post messages\n', postMessages, "\n");
        console.log("Worked fine");
        res.status(200).send(postMessages);
    } catch (err) {
        res.status(404).send({message: err.message});
    }
}

const createPost = async (req, res, next) => {
    
    const post = req.body;
    const newPost = new PostMessage(post);

    try {

        let v = await newPost.save();
        console.log("Post has been created \n");
        res.status(200).send(newPost);

    } catch (err) {
        console.log("Error message: ", err.message, "\n");
        res.status(409).send({message: err.message});
    }
}

exports = module.exports = {
    getPost,
    createPost,
}