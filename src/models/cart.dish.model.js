const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    dish_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dish",
      required: true,
    },
    quantity: { type: Number, required: true, default: 0 },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
