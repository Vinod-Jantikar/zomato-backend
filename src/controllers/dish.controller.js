const express = require("express");

const Dish = require("../models/dish.model");

const router = express.Router();

router.get("", async (req, res) => {
  try {
    const dish = await Dish.find().lean().exec();

    return res.send({ dish });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/based-on", async (req, res) => {
  try {
    const location = req.query.location;
    const restaurant = req.query.restaurant;

    console.log(location);
    let dish;

    if (!location) {
      dish = await Dish.find({ restaurantName: restaurant }).lean().exec();
    } else {
      dish = await Dish.find({ location: location }).lean().exec();
    }

    return res.status(200).send({ dish });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/create", async (req, res) => {
  try {
    const dish = await Dish.create(req.body);

    return res.send({ dish });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const dish = await Dish.findByIdAndDelete(req.params.id);

    return res.status(201).send(dish);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const dish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(dish);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

module.exports = router;
