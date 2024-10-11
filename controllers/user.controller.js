const { Dummy_User } = require("../data");
const HttpError = require("../utils/http-error");
const { v4: uuidv4 } = require('uuid');


const getUser = (req,res,next) => {
    res.status(200).json({ data:Dummy_User, status: "sucess" });
}

const signUp = (req,res,next) => {
    const {name,email,password} = req.body;
    console.log("req",req.body,email,password);
    if (
        [name,email,password].some((fields) => fields?.trim() === "")) {
            console.log("err",[name,email,password].some((fields) => fields?.trim() === ""))
        throw new HttpError("ALL fields are required", 400);
      }
    const hasUser = Dummy_User.find(p => p.email === email );
      console.log("hasUSer",hasUser);
    if(hasUser)
    {
        throw new HttpError("User alredy exist with this email id", 422);
    }
    const createUser= {
        id:uuidv4(),
        name,
        email,
        password,
    };
    Dummy_User.push(createUser);
    res.status(201).json({ status: "created sucess" ,user:createUser});
}

const signiIn = (req,res,next) => {
    const  { email,password} = req?.body;
   
    if (req.body ==""||[email,password].some((fields) => fields?.trim() === "")) 
        {
            console.log("err",[email,password].some((fields) => fields?.trim() === ""));
            throw new HttpError("ALL fields are required", 400);
        }

     let user = Dummy_User.find((i)=> i.email === email);
     if(!user || user.password !== password)
     {
        throw new HttpError("Could not identify user an password is incorrect",401);
     }
     else{

         return res.status(200).json({status:"Loged in Sucessfully",user});
     }
     
     
}

exports.getUser = getUser;
exports.signiIn = signiIn;
exports.signUp = signUp;