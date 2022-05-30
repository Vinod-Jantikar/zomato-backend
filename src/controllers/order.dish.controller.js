const express = require("express");

const Dish = require("../models/dish.model");
const Order = require("../models/order.dish.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const order = await Order.find().populate("cart_dish_id").lean().exec();

    return res.send({ order });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    return res.status(201).send(order);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const order = await Order.create(req.body);

    return res.send({ order });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);

    return res.status(201).send(order);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(order);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
