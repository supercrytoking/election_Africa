const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RegionSchema = new Schema({
  name: {
    type: String,
    required: [true, "Why no Region name?"],
    unique: [true, "Region name is unique"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  population: {
    type: Number,
  },
  coutry_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Country",
  },
});

module.exports = Region = mongoose.model("region", RegionSchema);
