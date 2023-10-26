const mongoose = require("mongoose");

// Menu schema
const menuSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    picture: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    foodGroup: {
        type: String,
        required: true
    },
    spicyLevel: {
        type: Number,
        default: 0
    }
});


const Menu = mongoose.model("menuCollection", menuSchema);

module.exports = Menu;