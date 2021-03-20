const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    creator: String,

    title: String,
    
    message: String,
    
    selectedFile: {
        type: String
    },
    
    tags: [String],

    likes: {
        type: [String],
        default: [],
    },

    createdAt: {
        type: Date,
        default: new Date,
    }
});

exports = module.exports = mongoose.model('postSchema', postSchema);