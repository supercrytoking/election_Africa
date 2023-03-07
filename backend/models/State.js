const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StateSchema = new Schema({
  name: {
    type: String,
    required: [
      true, "Why no State name?"
    ],
    unique: [true, "State name is unique"]
  },
  date: {
    type: Date,
    default: Date.now
  },
  population: {
    type: Number
  },
  region_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Region"
  }
});

module.exports = State = mongoose.model("state", StateSchema);
