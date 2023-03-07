const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CountrySchema = new Schema({
  name: {
    type: String,
    required: [true, "Why no Country name?"],
    unique: [true, "Country name is unique"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  population: {
    type: Number,
  },
});

module.exports = Country = mongoose.model("country", CountrySchema);
