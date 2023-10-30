const Order = require("../models/orderModel");

exports.submitOrder = async (req, res) => {
  try {
    const { cartItems, totalAmount, delivery, selfPickUp, address, location } = req.body;

    if ( !cartItems || !totalAmount || delivery === undefined || selfPickUp === undefined ) {
      return (res.status(400).json({ errorMessage: "Please enter all required fields" }), console.log(cartItems, totalAmount, delivery, pickUp, address, location))
    }

    if (delivery == true) {
      const order = new Order({
        cartItems,
        totalAmount,
        delivery,
        selfPickUp,
        address,
      });
      order.save();
    }

    if (selfPickUp == true) {
        const order = new Order({
          cartItems,
          totalAmount,
          delivery,
          selfPickUp,
          location,
        });
        order.save();
      }

    res.status(201).json({ success: "Order submitted successfully" });
  } catch (error) {
    console.log(error);
  }
};
