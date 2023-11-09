const Menu = require("../models/menuItemModel")

exports.getMenu = async (req, res) => {
    try {
        const menuItems = await Menu.find()
        return res.json(menuItems)
    } catch (error) {
        return res.status(500).json({ errorMessage: "An error occured" })
    }
}

exports.postMenu = async (req, res) => {
    try {
        const { foodName, ingredients, price, foodGroup, spicyLevel } = req.body;

        if (!foodName) {
            return res.status(400).json({ errorMessage: "Food needs a name" })
        }

        if(!ingredients) {
            return res.status(400).json({ errorMessage: "Need ingredients" })
        }

        if(!price) {
            return res.status(400).json({ errorMessage: "Need a price" })
        }

        let id = ""
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length))
        }

        const newMenuItem = new Menu({
            id,
            foodName,
            ingredients,
            price,
            foodGroup,
            spicyLevel,
        })
        newMenuItem.save()

        res.status(200).json({ message: "Menu item created." })
    } catch (error) {
        console.log(error);
    }
}