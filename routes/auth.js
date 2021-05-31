const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("Registered");
});
module.exports = router;
