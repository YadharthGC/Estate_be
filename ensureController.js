const mongoose = require("mongoose");
const mongodb = require("mongodb");
const enquire = require("./enquireModel");

exports.ensureFunction = async (req, res) => {
  try {
    let Name = req.body.name;
    let Email = req.body.mail;
    let Msg = req.body.msg;
    let newUser = new enquire({ Name, Email, Msg });
    console.log(newUser);
    await newUser.save();
    res.json({
      status: true,
    });
  } catch (err) {
    console.log(err);
  }
};
