const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { registerValidation, loginValidation } = require("../validation");

// REGISTER ROUTE

router.post("/register", async (req, res) => {
  // Validate the data before registering user
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, email, password } = req.body;

  //check if user exists
  const userExists = await User.findOne({ email });
  if (userExists) return res.send("User already exists");

  // HASH PASSWORD

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);

  // create a new user
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

// LOGIN ROUTE

router.post("/login", async (req, res) => {
  // Validate the data before registering user
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  //check if user exists
  const userExists = await User.findOne({ email });
  if (!userExists) return res.send("Email not found");

  //check if password is correct
  const passValid = await bcrypt.compare(password, userExists.password);
  if (!passValid) return res.status(400).send("Invalid Password");

  // JWT
  const token = await jwt.sign(
    { _id: userExists._id },
    process.env.TOKEN_SECRET,
  );
  res.header("auth-token", token).send(token);

  //res.send("YOU ARE LOGGED IN SUCCESSFULLY");
});

module.exports = router;
