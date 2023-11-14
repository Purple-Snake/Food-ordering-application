const Menu = require("../models/menuItemModel");
const JWT = require("jsonwebtoken");

exports.getMenu = async (req, res) => {
  try {
    const menuItems = await Menu.find();
    return res.json(menuItems);
  } catch (error) {
    return res.status(500).json({ errorMessage: "An error occured" });
  }
};

exports.postMenu = async (req, res) => {
  try {
    const { foodName, ingredients, price, foodGroup, spicyLevel } = req.body;
    const imageName = req.file.filename;

    const token = req.cookies.token;

    if (!token) {
      return res.json({ errorMessage: "No token found" });
    }

    JWT.verify(token, process.env.JWT_Secret, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ errorMessage: "Invalid token" });
      }

      if (decoded.role === "admin") {
        if (!foodName) {
          return res.status(400).json({ errorMessage: "Food needs a name" });
        }

        if (!ingredients) {
          return res.status(400).json({ errorMessage: "Need ingredients" });
        }

        if (!price) {
          return res.status(400).json({ errorMessage: "Need a price" });
        }

        if (!foodGroup) {
          return res.status(400).json({ errorMessage: "Need a food group" });
        }

        let id = "";
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
          id += characters.charAt(
            Math.floor(Math.random() * characters.length)
          );
        }

        await Menu.create({
          id: id,
          foodName: foodName,
          ingredients: ingredients,
          picture: imageName,
          price: price,
          foodGroup: foodGroup,
          spicyLevel: spicyLevel,
        });

        res.status(200).json({ message: "Menu item created." });
      } else {
        res.status(401).json({ errorMessage: "unauthorized user" });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMenuItem = async (req, res) => {
  try {
    const menuItemId = req.params.id;

    const token = req.cookies.token;

    JWT.verify(token, process.env.JWT_Secret, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ errorMessage: "Invalid token" });
      }

      if (decoded.role === "admin") {
        const deletedMenuItem = await Menu.findByIdAndDelete(menuItemId);

        if (deletedMenuItem) {
          res.status(200).json({ message: "Item successfully removed." });
        } else {
          res.status(404), json({ errorMessage: "Item not found" });
        }
      } else {
        res.status(401).json({ errorMessage: "unauthorized user" });
      }
    });
  } catch (error) {
    return res.status(500).json({ errorMessage: "An error occured" });
  }
};

exports.updateMenuItem = async (req, res) => {
  try {
    const { _id, foodName, ingredients, price, foodGroup, spicyLevel } =
      req.body;

    const token = req.cookies.token;

    JWT.verify(token, process.env.JWT_Secret, async (err, decoded) => {
      if (err) {
        return res.status(401).json({ errorMessage: "Invalid token" });
      }

      if (decoded.role === "admin") {
        await Menu.findOneAndUpdate(
          { _id: _id },
          {
            $set: {
              foodName: foodName,
              ingredients: ingredients,
              price: price,
              foodGroup: foodGroup,
              spicyLevel: spicyLevel,
            },
          },
          { new: true }
        );
        res.status(200).json({ message: "Menu item updated successfully" });
      } else {
        res.status(401).json({ errorMessage: "unauthorized user" });
      }
    });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
