const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://demo:<password>@cluster0.d1lkgh4.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("connected to atlas");
    }
  }
);
