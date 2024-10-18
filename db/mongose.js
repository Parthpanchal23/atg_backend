const mongoose = require('mongoose');

const Post = require('../Models/post');

mongoose.connect('mongodb+srv://tech_01:7mq2ljN7EkoxD4qM@atgback.fqmvh.mongodb.net/?retryWrites=true&w=majority&appName=Atgback').then(()=>{
    console.log("Connected Database sucessfully");
}).catch(()=>{
    console.log("Connectiopn failed");
});

const cretedPost = async(req,res,next) => {

    let creatPost = new Post({
        title:req.body.title,
        description:req.body.description,
        status:true
    });

    const result = await creatPost.save();
    res.status(200).json(result);

}

exports.CreatePost =cretedPost; 