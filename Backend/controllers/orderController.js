const Order = require("../models/orderModel");
const JWT = require("jsonwebtoken")

exports.submitOrder = async (req, res) => {
  try {
    const { cartItems, totalAmount, delivery, selfPickUp, address, location } = req.body;
    const token = req.cookies.token

    if ( !cartItems || !totalAmount || delivery === undefined || selfPickUp === undefined ) {
      return (res.status(400).json({ errorMessage: "Please enter all required fields" }), console.log(cartItems, totalAmount, delivery, pickUp, address, location))
    }


    JWT.verify(token, process.env.JWT_Secret, (err, decoded) => {
      if (err) {
        return res.status(401).json({ errorMessage: "Invalid token" });
      }

      const userName = decoded.userName;

      filteredCartItems = {}

      for (const key in cartItems) {
        if (cartItems[key] > 0) {
          filteredCartItems[key] = cartItems[key]
        }
      }

    if (delivery == true) {
      const order = new Order({
        userName,
        filteredCartItems,
        totalAmount,
        delivery,
        selfPickUp,
        address,
      });
      order.save();
    }

    if (selfPickUp == true) {
      const order = new Order({
        userName,
        filteredCartItems,
        totalAmount,
        delivery,
        selfPickUp,
        location,
      });
      order.save();
    }

    res.status(201).json({ success: "Order submitted successfully" });
  })
  } catch (error) {
    console.log(error);
  }
};
