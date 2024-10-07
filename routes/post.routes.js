const { Router } = require("express");
const { getPostById, getPostByUserId, getAllPost, createPost } = require("../controllers/post.controller");

const router = Router();

router.
    route("/")
    .get(getAllPost);

router.
    route("/:pid")
    .get(getPostById);

router.
    route("/user/:uid")
    .get(getPostByUserId);

// create post
router.
    route("/")
    .post(createPost);

module.exports =router;