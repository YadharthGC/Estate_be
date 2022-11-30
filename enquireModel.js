const mongoose = require("mongoose");
const ensureSchema = new mongoose.Schema({
  Name: {
    type: String,
  },
  Email: {
    type: String,
  },
  Msg: {
    type: String,
  },
});

module.exports = mongoose.model("ensure", ensureSchema);
