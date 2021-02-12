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

    likeCount: {
        type: Number,
        default: 0,
    },

    createdAt: {
        type: Date,
        default: new Date,
    }
});

exports = module.exports = mongoose.model('postSchema', postSchema);