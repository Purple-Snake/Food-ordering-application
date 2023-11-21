const express = require("express");
const customizationController = require("../controllers/customizationController");


const customizationRouter = express.Router();

customizationRouter
.route("/getCustomization")
.get(customizationController.getCustom)

module.exports = customizationRouter;