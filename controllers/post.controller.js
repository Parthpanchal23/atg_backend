const { Data } = require("../data");
const HttpError = require("../utils/http-error");
const {validationResult} = require('express-validator');
const uuid = require('uuid');
const getCordinateForAddress = require("../utils/location");


const getAllPost = (req, res, next) => {
  return res.json({ status: "sucess", data: Data });
};

const getPostById = (req, res, next) => {
  const id = req.params.pid;
  const post = Data?.find((p) => {
    return p.id == id;
  });

  if (post) {
    return res.json({ id, status: "sucess", data: post });
  } else {
    return res.status(400).json({ status: false, message: "post not Found" });
  }
};

const getPostsByUserId = (req, res, next) => {
  const id = req.params.uid;
  const post = Data?.filter((p) => {
    return p.creator == id;
  });

  if (post || post.length > 0) {
    return res.json({ id, status: "sucess", data: post });
  } else {
    // Error Handling
    // [1].
    // return res.status(404).json({status:false,message:"User post not Found"});

    // [2].
    // const error = new Error('Could not find a post for provided user id.');
    // error.code = 404;
    // next(error);

    // [3].
    throw new HttpError("Could not find a post for provided user id.", 400);
  }
};

const createPost = async(req, res, next) => {
 const errros= validationResult(req);
 if(!errros.isEmpty())
 {
  throw new HttpError("ALL fields are required", 422);
 }
  const { title, description, status, location, keyword, creator } = req.body;

 // check all feild is exist or not   
  // if (
  //   [title, description, status, location, keyword, creator].some((fields) => fields?.trim() === "")) {
  //       console.log("err",[title, description, status, location, keyword, creator].some((fields) => fields?.trim() === ""))
  //   throw new HttpError("ALL fields are required", 400);
  // }
  let cordinates;
try {
  cordinates = await getCordinateForAddress(location);
  
} catch (error) {
  next(error);
}

  const createdPost = {
    id:uuid(),
    title,
    description,
    location:cordinates,
    keyword,
    status,
    creator,
  };

  Data.push(createdPost);

  return res
    .status(201)
    .json({ message: "Post created Sucessfully", data: createdPost });
};

const updatePost = (req,res,next) => {
  const errros= validationResult(req);
 if(!errros.isEmpty())
 {
  console.log("errros",errros);
  throw new HttpError("ALL fields are required", 422);
 }
  const {title,description} = req.body;
  const postId = req.params.pid;

  const updatePostdata = {...Data.find(p => p.id === postId)};
  const postIndex = Data.findIndex(p => p.id === postId);
  updatePostdata.title =title;
  updatePost.description =description;

try{
  Data[postIndex] =updatePostdata;
  res.status(200).json({message:"updated Sucessfully",data:updatePostdata});
} catch(er) {
  throw new HttpError("Updation failed", 400);
}
}

const deletePost = (req,res,next) => {

  if(!Data.find(p => p.id === pid ))
  {
    throw new HttpError('Could not find place for that id',404);
  }
  const pid =req.params.pid;
  Data =Data.filter(p => p.id !== pid );
  res.status(200).json({message:"deleted sucessfull"})
}

exports.getAllPost = getAllPost;
exports.getPostById = getPostById;
exports.getPostsByUserId = getPostsByUserId;

exports.createPost = createPost;
exports.updatePost = updatePost;
exports.deletePost = deletePost;
