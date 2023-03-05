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


// @route    GET api/account
// @desc     
// @access
router.get("/:addr", async (req, res) => {  
  const addr = req.params.addr;
  try {
    let m_customer = await Customer.findOne({waddress : addr});
    if (!m_customer) {
      // Create new
      m_customer = new Customer ();
      m_customer.waddress = addr;
      m_customer.save();
    }
    res.json(m_customer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT   api/account
// @desc    update customer
// @access  public
router.put("/:addr", async (req, res) => {  
  const customer = req.body;
  try {
    const m_customer = await Customer.findOne({waddress : customer.waddress});
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
    m_customer.waddress = customer.waddress;
    await m_customer.save();
    
    res.json({ customer: m_customer });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST   api/account
// @desc    save customer data 
// @access  public
// router.post("/:addr", async (req, res) => {
//   const customer = req.body;
//   try {
//     const m_customer = await Customer.findOne({waddress : customer.waddress});
//     if (!m_customer) {
//       res.status(400).json({ message: 'Customer cannot find' });
//     }   
    
//     m_customer.name = customer.name;
//     m_customer.customUrl = customer.customUrl;
//     m_customer.email = customer.email;
//     m_customer.bio = customer.bio;
//     m_customer.facebookUname = customer.facebookUname;
//     m_customer.twitterUname = customer.twitterUname;
//     m_customer.discordUname = customer.discordUname;
//     m_customer.waddress = customer.waddress;
//     await m_customer.save();
    
//     res.json({ customer: m_customer });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send("Server Error");
//   }
// });

module.exports = router;
