const { Router } = require("express");
const Data = require("../data");

const router = Router();

router.
    route("/")
    .get((req, res, next) => {
        res.json({status:"sucess",data:Data});
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
            res.json({id,status:"sucess",data:post});
        }
        else{
            res.json({status:false,message:"post not Found"});
        }
    });

module.exports =router;