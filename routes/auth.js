const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  const user = new User({
    name,
    email,
    password,
  });
});
module.exports = router;
