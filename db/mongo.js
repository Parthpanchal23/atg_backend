const MongoClient = require("mongodb").MongoClient;

const db_password ='7mq2ljN7EkoxD4qM';
const URL =`mongodb+srv://tech_01:${db_password}@atgback.fqmvh.mongodb.net/?retryWrites=true&w=majority&appName=Atgback`;

const cretePost = async (req,res,next) => {

};


const getPosts = async (req,res,next) => {

};


exports.createMPost = cretePost;
exports.getMPost = getPosts;