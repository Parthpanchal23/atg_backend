const Data = require("../data");
const HttpError = require("../utils/http-error");
const uuid = require('uuid/v4');
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

const getPostByUserId = (req, res, next) => {
  const id = req.params.uid;
  const post = Data?.find((p) => {
    return p.creator == id;
  });

  if (post) {
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

const createPost = (req, res, next) => {
  const { title, description, status, location, keyword, creator } = req.body;

 // check all feild is exist or not   
  if (
    [title, description, status, location, keyword, creator].some((fields) => fields?.trim() === "")) {
        console.log("err",[title, description, status, location, keyword, creator].some((fields) => fields?.trim() === ""))
    throw new HttpError("ALL fields are required", 400,);
  }

  const createdPost = {
    id:uuid(),
    title,
    description,
    location,
    keyword,
    status,
    creator,
  };

  Data.push(createdPost);

  return res
    .status(201)
    .json({ message: "Post created Sucessfully", data: createdPost });
};

exports.getAllPost = getAllPost;
exports.getPostById = getPostById;
exports.getPostByUserId = getPostByUserId;

exports.createPost = createPost;
