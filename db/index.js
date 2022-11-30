const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://estate:estate@clusterestate.6be36qi.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("connected to atlas");
    }
  }
);
