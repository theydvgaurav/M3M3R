const mongoose = require('mongoose')

const posttemplate = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    title : {
        type : String,
        required : true,
    },
    data:{
        type : String,
        required : true,
    }
})

const posts = mongoose.model('posts',posttemplate)

module.exports = {posts}