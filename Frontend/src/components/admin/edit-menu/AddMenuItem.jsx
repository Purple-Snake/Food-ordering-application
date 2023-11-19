import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../../../context/ShopContext";

function AddMenuItem() {
  const { fetchMenuData } = useContext(ShopContext) 

  const [foodName, setFoodName] = useState("");
  const [ingredients, setIngredtients] = useState("");
  const [foodGroup, setFoodGroup] = useState("");
  const [price, setPrice] = useState(0);
  const [spicyLevel, setSpicyLevel] = useState(0);
  const [picture, setPicture] = useState(null);


  async function submitMenuItem(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append("foodName", foodName);
    formData.append("ingredients", ingredients);
    formData.append("foodGroup", foodGroup);
    formData.append("price", price);
    formData.append("spicyLevel", spicyLevel);
    formData.append("picture", picture[0]);

    try {
      await axios
        .post("http://localhost:3000/menu/postMenu", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        fetchMenuData()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={submitMenuItem} className="bg-slate-700 w-[34rem] min-h-fit mt-10 m-auto p-10">
      <label htmlFor="food-name">Name:</label>
      <input
        className="add-menu-item-input"
        type="text"
        id="food-name"
        onChange={(e) => setFoodName(e.target.value)}
      />
      <br />
      <label htmlFor="ingredients">Ingredients:</label>
      <br />
      <textarea
        className="add-menu-item-input"
        name=""
        id="ingredients"
        cols="20"
        rows="5"
        onChange={(e) => setIngredtients(e.target.value)}
      ></textarea>
      <br />
      <label htmlFor="food-Group">Group:</label>
      <input type="text" className="add-menu-item-input" onChange={(e) => setFoodGroup(e.target.value)} />
      <br />
      <label htmlFor="food-price">Price:</label>
      <input type="text" className="add-menu-item-input w-20" maxLength={4} onChange={(e) => setPrice(e.target.value)} />
      <br />
      <label htmlFor="spicy-lvl-select">spiciness:</label>
      <select
        className="add-menu-item-input w-10"
        name="spicy-lvl"
        id="spicy-lvl-select"
        onChange={(e) => setSpicyLevel(e.target.value)}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <br />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          setPicture(e.target.files);
        }}
      />
      <br />
      <input type="submit" value={"Add menu item"} />
    </form>
  );
}

export default AddMenuItem;
