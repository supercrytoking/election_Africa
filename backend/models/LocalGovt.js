const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const LocalGovtSchema = new Schema({
  name: {
    type: String,
    required: [
      true, "Why no Government name?"
    ],
    unique: [true, "Government name is unique"]
  },
  date: {
    type: Date,
    default: Date.now
  },
  population: {
    type: Number
  },
  state_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "State"
  }
});

module.exports = LocalGovt = mongoose.model("localgovt", LocalGovtSchema);
