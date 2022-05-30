const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema(
  {
    restaurantName: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("dish", dishSchema);
