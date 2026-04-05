const express = require("express");
const router = express.Router();
const User = require("../schema");
const bcryptjs = require("bcryptjs");

router.post("/", async (req, res) => {
  const { name, email, number, password } = req.body;

  const hashedPassword = await bcryptjs.hash(password, 8);
  console.log(hashedPassword);

  const response = await User.create({
    name,
    email,
    number,
    password: hashedPassword,
  });

  if(!response) {
    console.log("error");
  }
  res.status(200).json({
    name,
    number,
  });
});

router.get("/", (req, res) => {
  console.log("hello from server");
  res.send("hello form sever");
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body)
  const userFound = await User.findOne({ email });

  if (!userFound) {
    console.log("wrong");
  }

  const passwordMatch = await bcryptjs.compare(password, userFound.password);

  console.log(passwordMatch);

  if (!passwordMatch) {
    console.log("wrong pass");
    return;
  }

  res.status(200).json({
    name: userFound.name,
    number: userFound.number
  })
});

module.exports = router;
