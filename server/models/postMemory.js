const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: String,

    title: String,
    
    message: String,
    
    selectedFile: {
        type: String
    },
    
    tags: [String],

    creator: String,

    likes: {
        type: [String],
        default: [],
    },

    createdAt: String
});

exports = module.exports = mongoose.model('postSchema', postSchema);