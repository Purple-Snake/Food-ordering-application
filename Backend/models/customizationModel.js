const mongoose = require("mongoose");

// Customization schema
const customizationSchema = new mongoose.Schema({
    background_colour: {
        type: String,
    },
    primary_colour: {
        type: String
    },
    secondary_colour: {
        type: String
    },
    _colour: {
        type: String
    }
});

// User model
const Customization = mongoose.model("customizationCollection", customizationSchema);

module.exports = Customization;
