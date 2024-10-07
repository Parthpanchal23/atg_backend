const { Router } = require("express");
const { getPostById, getPostByUserId, getAllPost } = require("../controllers/post.controller");

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

module.exports =router;