const express = require("express")
const userController = require("../controllers/userController");
const auth = require("../middleware/auth")
// const { route } = require("../app");

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
.route("/getUser")
.get(userController.getUser, auth)

module.exports = userRouter;