const mongoose = require('mongoose');
const PostMessage = require('../models/postMemory')

const getPost = async (req, res, next) => {   
    
    try {
        const postMessages = await PostMessage.find();
        // console.log('iam post messages\n', postMessages, "\n");
        console.log("Worked fine");
        res.status(200).send(postMessages);
    } catch (err) {
        res.status(404).send({message: err.message});
    }
}

const createPost = async (req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

    try {
        await newPostMessage.save();
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const updatePost = async (req, res, next) => {
    const { id: _id } =  req.params;
 
    post = req.body;

    const updatePost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, {new: true});

    try {
        // console.log(updatePost);
        res.status(200).json(updatePost);
    }  
    catch (err) {
        // console.log("SHIT!");
        console.log(err);
    } 

}

const deletePost = async (req, res, next) => {
    
    const { id } = req.params;    

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Sorry no post available with that id')

    await PostMessage.findByIdAndRemove(id);

    res.json('Post Deleted Successfully')

}

const likePost = async (req, res, next) => {

    const { id } = req.params;

    if (!req.userId) return res.json({message: 'Sorry! You are not authorized to do so :('})

    if (!mongoose.Types.ObjectId.isValid(id))  return res.status(404).send('No Post available with that id');

    const post = await PostMessage.findById(id);
    
    // first check if he has already liked the post then we wont let him again do it 

    const ind = post.likes.findIndex((id) => String(id) === String(req.userId));

    if (ind === -1) {
        post.likes.push(req.userId);    
    } else {
        post = post.likes.filter((id) => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

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