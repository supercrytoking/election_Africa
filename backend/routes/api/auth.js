const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/keys");
const auth = require("../../middleware/auth");
const { validationResult } = require("express-validator");

// Load input validation
const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../validation/auth");

// Load User model
const User = require("../../models/User");

// @route POST api/auth/register
// @desc Register user
// @access Public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  console.log("registered user infomation=>", req.body);
  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ email: "User already exists" });
    }
    let state = "In-Active";
    user = new User({
      name,
      email,
      password,
      state,
    });
    if (email === "superadmin@playestates.com") user.state = "Active";
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    // const payload = {
    //   user: {
    //     _id: user._id,
    //     name: user.name,
    //     state: user.state
    //   },
    // };

    jwt.sign(
      { id: user._id },
      config.secretOrKey,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        return res.json({
          success: true,
          accessToken: "Bearer " + token,
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            state: user.state,
          },
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", validateLoginInput(), async (req, res) => {
  const { email, password } = req.body;

  // console.log("login user data=>",  req.body);
  // Find user by email
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ auth: "Invalid Credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ auth: "Invalid Credentials" });
    }

    jwt.sign(
      { id: user._id },
      config.secretOrKey,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.json({
          success: true,
          accessToken: "Bearer " + token,
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            state: user.state,
          },
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// @route    GET api/users/current
// @desc     Get user by token
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
