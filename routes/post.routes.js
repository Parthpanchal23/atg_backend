const { Router } = require("express");
const Data = require("../data");
const HttpError = require('../utils/http-error');
const router = Router();




router.
    route("/")
    .get((req, res, next) => {
        return res.json({status:"sucess",data:Data});
    });

router.
    route("/:pid")
    .get((req, res, next) => {
        const id = req.params.pid;
        const post = Data?.find(p=> {
            return p.id == id;
        });
        
        if(post)
        {
             return res.json({id,status:"sucess",data:post});
        }
        else{
            return res.status(400).json({status:false,message:"post not Found"});
        }
    });

    router.
    route("/user/:uid")
    .get((req, res, next) => {
        const id = req.params.uid;
        const post = Data?.find(p=> {
            return p.creator == id;
        });
        
        if(post)
        {
            return res.json({id,status:"sucess",data:post});
        }
        else{
        // Error Handling
        // [1].   
        // return res.status(404).json({status:false,message:"User post not Found"});

        // [2].
        // const error = new Error('Could not find a post for provided user id.');
        // error.code = 404;

        // [3].
        throw new HttpError('Could not find a post for provided user id.',400);

        next(error);
        }
    });

module.exports =router;