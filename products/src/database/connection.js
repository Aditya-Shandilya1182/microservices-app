const mongoose = require("mongoose");
const { DB_URL } = require("../config");
require('dotenv').config();


module.exports = async () => {
  
  try {
    await mongoose.connect(process.env.MONGODB_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("Error ============");
    console.log(error);
  }
};