import axios from "axios";
import { useState } from "react";

function AddMenuItem() {
    const [ foodName, setFoodName ] = useState("");
    const [ ingredients, setIngredtients ] = useState("");
    const [ foodGroup, setFoodGroup ] = useState("");
    const [ price, setPrice ] = useState(0);
    const [ spicyLevel, setSpicyLevel ] = useState(0);
    const [ picture, setPicture ] = useState(null)

    // oh the misery the add function does not work.
  async function submitMenuItem(e) {
    e.preventDefault();

    const formData = new FormData();
    
    formData.append("foodName", foodName);
    formData.append("ingredients", ingredients);
    formData.append("foodGroup", foodGroup);
    formData.append("price", price);
    formData.append("spicyLevel", spicyLevel);
    formData.append("picture", picture[0])
  
    // await axios.post("http://localhost:3000/menu/postMenu", formData, {
    //     headers: { "Content-Type": "multipart/form-data" }
    // }).then(
    //     (response) => {console.log(response.data);}
    // ).catch((error) => {console.log(error);})
    // console.log("submit button clicked");
    console.log(picture[0]);
  }

  return (
    <form onSubmit={submitMenuItem} className="bg-slate-700">
      <label htmlFor="food-name">Name:</label>
      <input type="text" id="food-name" onChange={(e) => setFoodName(e.target.value)}/>
      <label htmlFor="ingredients">Ingredients:</label>
      <textarea name="" id="ingredients" cols="30" rows="10" onChange={(e) => setIngredtients(e.target.value)}></textarea>
      <label htmlFor="food-Group">Group:</label>
      <input type="text" onChange={(e) => setFoodGroup(e.target.value)}/>
      <label htmlFor="food-price">Price:</label>
      <input type="text" onChange={(e) => setPrice(e.target.value)}/>
      <label htmlFor="spicy-lvl-select">spiciness:</label>
      <select name="spicy-lvl" id="spicy-lvl-select" onChange={(e) => setSpicyLevel(e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <input type="file" accept="image/*" onChange={(e) => {setPicture(e.target.files)}} />
      <input type="submit" value={"Submit"} />
    </form>
  );
}

export default AddMenuItem;
