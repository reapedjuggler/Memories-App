const route = require('express').Router();
const getPost = require('../controllers/memories').getPost;
const createPost = require('../controllers/memories').createPost;

route.get('/', getPost);
route.post('/', createPost);

exports = module.exports = {
    route,
};