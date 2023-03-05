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

// Load Customer model
const Customer = require("../../models/Customer");
const { restart } = require("nodemon");


// @route POST api/customers
// @desc Add a new customer
// @access 
router.post("/", async (req, res) => {
  const { name, customUrl, password, email, bio, facebookUname, twitterUname, discordUname } = req.body.customer;
  
  try {
    let customer = await Customer.findOne({ email });
    
    if (customer) {
      res.status(400).json({ email: "Customer already exists" });
    }

    let password = 'demo'; 
    let state ='In-Active';

    customer = new Customer({
      name,
      customUrl,
      email,
      bio,
      customUrl,
      facebookUname,
      twitterUname,
      discordUname,
      password,
      state,
    });

    const salt = await bcrypt.genSalt(10);    
    customer.password = await bcrypt.hash(password, salt);
    await customer.save();
    res.json({ customer: customer });
  } catch (err) {
    res.status(500).send("Server error");
  }
});

// @route    GET api/customers/find
// @desc     ex: Get customer by token
// @access   ex: Private
router.post("/find", async (req, res) => {
  try {
    const customers = await Customer.find({})
    res.json({
      totalCount: customers.length,
      entities: customers
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    GET api/customers
// @desc     Get customer by id
// @access   
router.get("/:id", async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json( customer );
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route POST api/customers
// @desc Update a customer
// @access 
router.put("/:id", async (req, res) => {
  const customer = req.body.customer;  
  try {
    const m_customer = await Customer.findById( customer._id );
    if (!m_customer) {
      res.status(400).json({ message: 'Customer cannot find' });
    }   
    
    m_customer.name = customer.name;
    m_customer.customUrl = customer.customUrl;
    m_customer.email = customer.email;
    m_customer.bio = customer.bio;
    m_customer.facebookUname = customer.facebookUname;
    m_customer.twitterUname = customer.twitterUname;
    m_customer.discordUname = customer.discordUname;
    await m_customer.save();
    
    res.json({ customer: m_customer });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/customers
// @desc Delete a new customer
// @access 
router.delete("/:id", async (req, res) => {
  try {
    await Customer.findOneAndDelete({_id: req.params.id})
    res.json({ state: true });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
