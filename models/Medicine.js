const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    genericName: {
      type: String,
      required: true,
    },

    strength: {
      type: String,
      required: true,
    },

    dosageForm: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    manufacturer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Medicine", medicineSchema);
