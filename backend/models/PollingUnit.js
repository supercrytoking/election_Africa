const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PollingUnitSchema = new Schema({
  name: {
    type: String,
    required: [true, "Why no Polling Unit name?"]
  },
  total_registered: {
    type: Number
  },
  total_nonregistered: {
    type: Number
  },
  date: {
    type: Date,
    default: Date.now
  },
  population: {
    type: Number
  },
  ward_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Ward"
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = PollingUnit = mongoose.model("pollingunit", PollingUnitSchema);
