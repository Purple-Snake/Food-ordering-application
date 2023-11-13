const express = require("express");
const menuController = require("../controllers/menuController")
const upload = require("../middleware/multer")


const menuRouter = express.Router();

menuRouter
.route("/getMenu")
.get(menuController.getMenu)

menuRouter
.route("/postMenu")
.post(upload.single("picture") ,menuController.postMenu)

menuRouter
.route("/deleteMenuItem/:id")
.delete(menuController.deleteMenuItem)

module.exports = menuRouter;