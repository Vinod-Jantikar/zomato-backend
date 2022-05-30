const express = require("express");

const dishController = require("./controllers/dish.controller");
const cartController = require("./controllers/cart.dish.controller");
const orderController = require("./controllers/order.dish.controller");

const app = express();

app.use(express.json());

app.use(express.static("public"));

app.use("/cart-dish", cartController);
app.use("/order-dish", orderController);
app.use("/dish", dishController);

module.exports = app;
