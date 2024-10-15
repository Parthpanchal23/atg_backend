const { Router } = require("express");
const { signiIn, signUp, getUser } = require("../controllers/user.controller");
const { check } = require("express-validator");

const router = Router();

router
  .route("/")
  .get(getUser);

router
 .route("/signup")
 .post([check("name").not().isEmpty(),check("email").normalizeEmail().isEmail(),check("password").isLength({min:6})],signUp);

router
 .route("/login")
 .post(signiIn);

module.exports = router;
