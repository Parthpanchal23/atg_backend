const { Router } = require("express");

const router = Router();

router.get("/", (req, res, next) => {
  console.log("Get request in Post ");
  res.json({message:"Working",status:"sucess"});
});

module.exports =router;