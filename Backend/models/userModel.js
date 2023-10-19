const mongoose = require("mongoose");

// User schema
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Must have a email"],
    unique: [true, "Email must be unique"],
  },
  userName: {
    type: String,
    required: [true, "Must have a user name"],
  },
  password: {
    type: String,
    required: [true, "Must have a password"],
  },
});

// User model
const User = mongoose.model("user", userSchema);

module.exports = User;
