const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error", error);
  }
}

module.exports = connectDB;