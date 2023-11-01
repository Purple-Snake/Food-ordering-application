const express = require("express");
const orderController = require("../controllers/orderController")


const orderRouter = express.Router();

orderRouter
.route("/submitOrder")
.post(orderController.submitOrder)

module.exports = orderRouter;