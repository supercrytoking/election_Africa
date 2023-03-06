const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PartySchema = new Schema({
  name: {
    type: String,
    required: [true, "Why no Ward name?"]
  },
  logo: {
    data: Buffer,
    contentType: String
  },
  address: {
    type: String,
    required: [true, "Why not address?"]
  }
});

module.exports = Party = mongoose.model("party", PartySchema);
