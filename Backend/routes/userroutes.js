const express = require("express")
const userController = require("../controllers/userController");

const userRouter = express.Router();

userRouter
.route("/register")
.post(userController.register)


userRouter
.route("/login")
.post(userController.login)

userRouter
.route("/logout")
.get(userController.logout)

userRouter
.route("/loggedIn")
.get(userController.loggedIn)

module.exports = userRouter;