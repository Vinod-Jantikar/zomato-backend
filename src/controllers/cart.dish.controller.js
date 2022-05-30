const express = require("express");

const Dish = require("../models/dish.model");
const Order = require("../models/order.dish.model");
const Cart = require("../models/cart.dish.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const cart = await Cart.find().populate("dish_id").lean().exec();

    return res.send({ cart });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    return res.status(201).send(cart);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const cart = await Cart.create(req.body);

    return res.send({ cart });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);

    return res.status(201).send(cart);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(cart);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
