const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  gender: String,
  status: String,
});

const userModel = mongoose.model("USM04", schema);
module.exports = userModel;
