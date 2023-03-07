const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ResultSchema = new Schema({
  image: {
    type: String,
    required: true
  },
  partyscore_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PartyScore"
  },
  agent_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  electron_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Electron"
  },
  year: {
    type: Number
  }
});

module.exports = Result = mongoose.model("result", ResultSchema);
