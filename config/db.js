const mongoose = require("mongoose");

const connection_string = "mongodb://localhost:27017/recipesDB";

async function connectDB() {
  try {
    await mongoose.connect(connection_string);
    console.log("DB connected");
  } catch (error) {
    console.error("DB connctoin error", error)
  }
}

module.exports = connectDB;
