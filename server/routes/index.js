const route = require('express').Router();
const getPost = require('../controllers/memories').getPost;
const createPost = require('../controllers/memories').createPost;
const updatePost = require('../controllers/memories').updatePost;
const deletePost = require('../controllers/memories').deletePost;
const likePost = require('../controllers/memories').likePost


route.get('/', getPost);
route.post('/', createPost);
route.patch('/:id', updatePost);
route.delete('/:id', deletePost);
route.patch('/:id/likePost', likePost);

exports = module.exports = {
    route,
};