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
const { restart } = require("nodemon");


// @route POST api/users
// @desc Add a new user
// @access 
router.post("/", async (req, res) => {
  const { name, password, email } = req.body.user;
  
  try {
    let user = await User.findOne({ email });
    
    if (user) {
      res.status(400).json({ email: "Customer already exists" });
    }

    // default values
    let password = 'demo'; 
    let state ='In-Active';

    user = new User({ name, email, password, state, });
    const salt = await bcrypt.genSalt(10);    
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.json({ customer: user });
  } catch (err) {
    res.status(500).send("Server error");
  }
});


// @route    GET api/users/find
// @desc     ex: Get user by token
// @access   ex: Private
router.post("/find", async (req, res) => {
  try {
    const users = await User.find({})
    res.json({
      totalCount: users.length,
      entities: users
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/users
// @desc     Get user by id
// @access   
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json( user );
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route POST api/users
// @desc Update a user
// @access 
router.put("/:id", async (req, res) => {
  const user = req.body.user;  
  try {
    const m_user = await User.findById( user._id );
    if (!m_user) {
      res.status(400).json({ message: 'User cannot find' });
    }   
    
    m_user.name = user.name;
    m_user.customUrl = user.customUrl;
    m_user.email = user.email;
    m_user.bio = user.bio;
    m_user.facebookUname = user.facebookUname;
    m_user.twitterUname = user.twitterUname;
    m_user.discordUname = user.discordUname;
    await m_user.save();
    
    res.json({ customer: m_user });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/users
// @desc Delete a new user
// @access 
router.delete("/:id", async (req, res) => {
  try {
    await User.findOneAndDelete({_id: req.params.id})
    res.json({ state:true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
