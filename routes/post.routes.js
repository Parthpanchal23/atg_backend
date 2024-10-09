
const { Router } = require("express");
const { getPostById, getPostsByUserId, getAllPost, createPost, deletePost, updatePost } = require("../controllers/post.controller");

const router = Router();
/**
 * @swagger
 * /Post/:
 *   get:
 *     summary: Retrieve a list of All posts
 *     responses:
 *       200:
 *         description: A successful response
 */
router.
    route("/")
    .get(getAllPost);


/**
 * @swagger
 * /posts/:pid:
 *   get:
 *     summary: Retrieve of posts of id
 *     responses:
 *       200:
 *         description:Retrieve of posts
 */
router.
    route("/:pid")
    .get(getPostById);


/**
 * @swagger
 * /posts/user/:uid:
 *   get:
 *     summary: Retrieve User posts based on uid
 *     responses:
 *       200:
 *         description:Retrieve of posts of user
 */ 
router.
    route("/user/:uid")
    .get(getPostsByUserId);



router.
    route("/")
    .post(createPost);


router.
    route("/:pid")
    .patch(updatePost);    

router.
    route("/:pid")
    .delete(deletePost);

    
module.exports =router;