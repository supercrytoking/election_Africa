const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const WardSchema = new Schema({
  name: {
    type: String,
    required: [true, "Why no Ward name?"]
  },
  date: {
    type: Date,
    default: Date.now
  },
  population: {
    type: Number
  },
  localgovt_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LocalGovt"
  }
});

module.exports = Ward = mongoose.model("ward", WardSchema);
