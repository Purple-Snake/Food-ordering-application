const Menu = require("../models/menuItemModel")

exports.getMenu = async (req, res) => {
    try {
        const menuItems = await Menu.find()
        return res.json(menuItems)
    } catch (error) {
        return res.status(500).json({ errorMessage: "An error occured" })
    }
}