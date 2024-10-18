const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required: true,
    },
    status:{
        type:Boolean,
    }
},{timestamps:true})

module.exports = mongoose.model('Post',postSchema);
