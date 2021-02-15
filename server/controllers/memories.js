const mongoose = require('mongoose');
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
    console.log(req.body, "\n im post in server\n");
    const newPost = new PostMessage(post);

    try {

        let v = await newPost.save();
        console.log("Post has been created", "\n");
        res.status(200).json(newPost);

    } catch (err) {
        console.log("Error message: ", err.message, "\n");
        res.status(409).send({message: err.message});
    }
}

const updatePost = async (req, res, next) => {
    const { id: _id } =  req.params;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.statues(404).send('Sorry there are no post available with that Id');

    post = req.body;

    const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, {new: true});

    try {
        console.log(updatePost);
    }  
    catch (err) {
        console.log(err);
    } 

}

const deletePost = async (req, res, next) => {
    
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Sorry no post available with that id')

    await PostMessage.findByIdAndRemove(id);

    console.log("  Post deleted tk \n");

    res.json('Post Deleted Successfully')

}

const likePost = async (req, res, next) => {

    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))  return res.status(404).send('No Post available with that id');

    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, {likeCount: post.likeCount + 1}, {new: true});

    res.json(updatedPost);

    try {
        console.log(updatedPost);
    }

    catch (err) {
        console.log(err);
    }

};

exports = module.exports = {
    getPost,
    createPost,
    updatePost,
    deletePost,
    likePost,
}