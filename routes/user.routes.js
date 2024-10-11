const { Router } = require("express");
const { signiIn, signUp, getUser } = require("../controllers/user.controller");


const router = Router();

router
  .route("/")
  .get(getUser);

router
 .route("/signup")
 .post(signUp);

router
 .route("/login")
 .post(signiIn);

module.exports = router;
