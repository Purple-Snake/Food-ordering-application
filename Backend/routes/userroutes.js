const express = require("express")
const userController = require("../controllers/userController");
// const { route } = require("../app");

const userRouter = express.Router();

userRouter
.route("/")
.post(userController.register)


// userRouter
// .route("/login")
// .post(userController.login)

// userRouter
// .route("/logout")
// .get(userController.logout)


// userRouter.post("/registration", (req, res) => {
//     console.log(req.body)
// })


module.exports = userRouter;