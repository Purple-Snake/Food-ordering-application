const mongoose = require("mongoose");

// Colour schema
const colourSchema = new mongoose.Schema({
    background_colour: {
        type: String,
    },
    primary_colour: {
        type: String
    },
    Secondary_colour: {
        type: String
    },
    _colour: {
        type: String
    }
});

// User model
const Colour = mongoose.model("colourCollection", colourSchema);

module.exports = Colour;
