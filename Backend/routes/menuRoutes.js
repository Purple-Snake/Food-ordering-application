const express = require("express");
const menuController = require("../controllers/menuController")


const menuRouter = express.Router();

menuRouter
.route("/getMenu")
.get(menuController.getMenu)


module.exports = menuRouter;