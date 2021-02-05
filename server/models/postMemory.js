const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    
    message: String,
    
    creater: String,
    
    tags: [String],
    
    selectedFile: String,
    
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