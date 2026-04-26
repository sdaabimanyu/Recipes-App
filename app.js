require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

connectDB();

app.use("/recipes", require("./routes/recipeRoutes"));

app.get("/", (req, res) => {
  res.json({
    message: "Server Working",
  });
});

app.listen(3000, () => {
  console.log("Server Started");
});
