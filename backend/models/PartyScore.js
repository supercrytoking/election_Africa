const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const PartyScoreSchema = new Schema({
  score: {
    type: Number
  },
  party_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Party"
  },
  electron_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Electron"
  },
  result_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Result"
  }
});

module.exports = PartyScore = mongoose.model("partyscore", PartyScoreSchema);
