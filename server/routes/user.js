const route = require('express').Router();
const jwt = require('jsonwebtoken');
const config = process.env.key;

const signin = require('../controllers/users').signIn;
const signup = require('../controllers/users').signUp;

route.post('/signin', signin);
route.post('/signup', signup);

exports = module.exports = {
    route,
}