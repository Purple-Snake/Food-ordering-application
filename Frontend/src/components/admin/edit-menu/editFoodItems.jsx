// import spicyIcon from "../../assets/images/svg/pepper-hot-solid.svg";
import editIcon from "../../../assets/images/svg/edit-item.svg";
import PropTypes from "prop-types";
import axios from "axios";
import { useContext, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";

function FoodItems({ foodItems }) {
  const { fetchMenuData } = useContext(ShopContext);

  function edit(id) {
    let editBtn = document.getElementById(`edit-btn-${id}`);
    let confirmBtn = document.getElementById(`confirm-btn-${id}`);

    // let foodPic = document.querySelector(`.foodItem-pic-${id} img`);
    let foodName = document.querySelector(`.foodItem-foodName-${id}`);
    let foodSpicy = document.querySelector(`.foodItem-spicy-${id}`);
    let foodIngr = document.querySelector(`.foodItem-ingr-${id}`);
    let foodPrice = document.querySelector(`.foodItem-price-${id}`);

    foodName.outerHTML = `<input type="text" class="w-72 input-foodName-${id}" value=${foodName.innerHTML} />`;
    foodSpicy.outerHTML = `<input type="text" class="w-10 input-spicy-${id}" value=${foodSpicy.innerHTML} />`;
    foodIngr.outerHTML = `<textarea style="width: 100%" class="input-ingredients-${id}">${foodIngr.innerHTML}</textarea>`;
    foodPrice.outerHTML = `<input type="text" class="w-20 input-price-${id}" value=${foodPrice.innerHTML} />`;
    // foodPic.outerHTML =`<input type=file style="width:100%"></input>`

    if (editBtn.style.display === "none") {
      editBtn.style.display = "block";
    } else {
      editBtn.style.display = "none";
      confirmBtn.style.display = "block";
    }
  }

  async function confirm(id, objectId) {
    let editBtn = document.getElementById(`edit-btn-${id}`);
    let confirmBtn = document.getElementById(`confirm-btn-${id}`);

    let foodName = document.querySelector(`.input-foodName-${id}`);
    let foodSpicy = document.querySelector(`.input-spicy-${id}`);
    let foodIngr = document.querySelector(`.input-ingredients-${id}`);
    let foodPrice = document.querySelector(`.input-price-${id}`);

    let newPatch = {
      _id: objectId,
      foodName: foodName.value,
      ingredients: foodIngr.value,
      price: foodPrice.value,
      spicyLevel: foodSpicy.value,
    };
    console.log(newPatch);

    try {
      await axios.patch("http://localhost:3000/menu/updateMenuItem", newPatch);
      fetchMenuData();
    } catch (error) {
      console.log(error);
    }

    // foodName.outerHTML = `<span className="foodItem-foodName-${foodItem.id}">${foodName.innerHTML}</span>`
    // foodSpicy.outerHTML =
    // foodIngr.outerHTML =
    // foodPrice.outerHTML =

    if (confirmBtn.style.display === "none") {
      confirmBtn.style.display = "block";
    } else {
      confirmBtn.style.display = "none";
      editBtn.style.display = "block";
    }
  }

  async function deleteItem(objectId) {
    try {
      await axios.delete(
        `http://localhost:3000/menu/deleteMenuItem/${objectId}`
      );
      fetchMenuData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {foodItems.map((foodItem) => (
        <div className="foodMenuItem md:flex p-10" key={foodItem.id}>
          <div>
            <div className={`foodItem-pic-${foodItem.id}`}></div>
          </div>
          <div className="name text-3xl m-1">
            <div>
              Name:
              <span className={`foodItem-foodName-${foodItem.id}`}>
                {foodItem.foodName}
              </span>
              <div>
                Spice:
                <span className={`foodItem-spicy-${foodItem.id}`}>
                  {foodItem.spicyLevel}
                </span>
              </div>
            </div>
            <div className="ingredients text-lg m-1 max-w-sm">
              <div>
                <i className={`foodItem-ingr-${foodItem.id}`}>
                  {foodItem.ingredients}
                </i>
              </div>
            </div>
          </div>
          <div className="foodPrice text-3xl items-center">
            <div>
              <b className={`foodItem-price-${foodItem.id}`}>
                {foodItem.price}
              </b>
              €
            </div>
          </div>
          <div className="button-container">
            <button
              className="opt-btn"
              id={`edit-btn-${foodItem.id}`}
              onClick={() => edit(foodItem.id)}
            >
              <img className="icon" src={editIcon} alt="edit" />
            </button>
            <button
              className="opt-btn"
              id={`confirm-btn-${foodItem.id}`}
              style={{ display: "none" }}
              onClick={() => confirm(foodItem.id, foodItem._id)}
            >
              <img className="icon" src="" alt="confirm" />
            </button>
          </div>
          <div className="delete-btn-container">
            <button onClick={() => deleteItem(foodItem._id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}

FoodItems.propTypes = {
  foodItems: PropTypes.array.isRequired,
};

export default FoodItems;
