const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ElectronSchema = new Schema({
  name: {
    type: String,
    required: [true, "Why no Ward name?"]
  }
});

module.exports = Electron = mongoose.model("electron", ElectronSchema);
