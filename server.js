const express = require("express");

const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Pharmacy POS Server is Running!");
});

app.get("/api/medicines", (req, res) => {
  res.json({
    message: "Medicines API is working",
  });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.log("MongoDB connection failed:", error.message);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});