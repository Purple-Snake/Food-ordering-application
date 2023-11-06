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

      let orderId = ""
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 5; i++) {
        orderId += characters.charAt(Math.floor(Math.random() * characters.length))
      }

    if (delivery == true) {
      const order = new Order({
        orderId,
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
        orderId,
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

exports.getOrders = async (req, res) => {
  try {
      const orders = await Order.find()
      return res.json(orders)
  } catch (error) {
      return res.status(500).json({ errorMessage: "An error occured" })
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const deletedOrder = await Order.findByIdAndDelete(orderId);
    if (deletedOrder) {
      res.status(200).json({ message: "Order deleted successfully." })
    } else {
      res.status(404).json({ errorMessage: "Order not found." })
    }
  } catch (error) {
    return res.status(500).json({ errorMessage: "An error occured"})
  }
}