const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    id: String, 
    name: String,
    password: String, 
});

exports = module.exports = mongoose.model('user', userSchema);