const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    cart_dish_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "cart",
      required: true,
    },
    status: { type: String, required: true, default: "order accepted" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
