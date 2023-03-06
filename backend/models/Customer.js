const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CustomerSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    // unique: [true, "Email is unique"],
  },
  customUrl: {
    type: String,
  },
  bio: {
    type: String,
  },
  facebookUname: {
    type: String,
  },
  twitterUname: {
    type: String,
  },
  discordUname: {
    type: String,
  },
  waddress: {
    type: String,
    unique: [true, "Address is unique"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Customer = mongoose.model("customers", CustomerSchema);
