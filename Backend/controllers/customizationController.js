const Customization = require("../models/customizationModel")

exports.getCustom = async (req, res) => {
    try {
      const menuItems = await Customization.find();
      return res.json(menuItems);
    } catch (error) {
      return res.status(500).json({ errorMessage: "An error occured" });
    }
  };