const mongoose = require('mongoose');

const Post = require('../Models/post');


const cretedPost = async(req,res,next) => {

    let creatPost = new Post({
        titile:req.title,
        description:req.description
    })

}

exports.CreatedPost =cretedPost; 