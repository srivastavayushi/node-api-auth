const express = require("express");
const router = express.Router();
const verify = require("../config/verifyToken");

router.get("/", verify, (req, res) => {
  //res.send("POSTS ROUTE : PROTECTED ROUTE");
  res.send(req.user);
});

module.exports = router;
