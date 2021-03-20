const route = require('express').Router();
const getPost = require('../controllers/memories').getPost;
const createPost = require('../controllers/memories').createPost;
const updatePost = require('../controllers/memories').updatePost;
const deletePost = require('../controllers/memories').deletePost;
const likePost = require('../controllers/memories').likePost
const middleware = require('../middlewares/auth');

route.get('/', getPost);
route.post('/', middleware.auth ,createPost);
route.patch('/:id', middleware.auth ,updatePost);
route.delete('/:id', middleware.auth ,deletePost);
route.patch('/:id/likePost', middleware.auth ,likePost);

exports = module.exports = {
    route,
};  