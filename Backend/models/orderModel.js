const mongoose = require("mongoose");

// Order schema
const orderSchema = new mongoose.Schema({
    cartItems: {
        type: Object,
        required: [true, "Must have an menu item"],
    },
    totalAmount: {
        type: String,
    },
    delivery: {
        type: Boolean
    },
    selfPickUp: {
        type: Boolean
    },
    address : {
        type: String
    },
    location: {
        type: String
    }
});

const Order = mongoose.model("orderCollection", orderSchema);

module.exports = Order;