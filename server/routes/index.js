const route = require('express').Router();
const getPost = require('../controllers/memories').getPost;
const createPost = require('../controllers/memories').createPost;
const updatePost = require('../controllers/memories').updatePost;

route.get('/', getPost);
route.post('/', createPost);
route.patch('/:id', updatePost);

exports = module.exports = {
    route,
};