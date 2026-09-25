const express = require("express");

const app = express();
const mongoose = require("mongoose");
const Medicine = require("./models/Medicine");

require("dotenv").config();

const PORT = 8000;

app.get("/", (req, res) => {
  res.send("Pharmacy POS Server is Running!");
});

app.use(express.json());

app.post("/api/medicines", async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);

    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create medicine",
      error: error.message,
    });
  }
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