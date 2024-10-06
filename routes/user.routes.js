const { Router } = require("express");

const router = Router();

router.route("/").get((req, res, next) => {
  console.log("Get request in User ");
  res.json({ message: "Working", status: "sucess" });
});


module.exports = router;
