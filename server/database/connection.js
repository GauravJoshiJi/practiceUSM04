const mongoose = require("mongoose");

const Userdb = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongodb Connected : ${con.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};

module.exports = Userdb;
