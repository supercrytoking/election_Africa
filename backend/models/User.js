const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email is unique"],
  },
  password: {
    type: String,
  },  
  date: {
    type: Date,
    default: Date.now
  },
});

module.exports = User = mongoose.model("users", UserSchema);
