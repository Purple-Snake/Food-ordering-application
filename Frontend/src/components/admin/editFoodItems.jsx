import spicyIcon from "../../assets/images/svg/pepper-hot-solid.svg";
import editIcon from "../../assets/images/svg/edit-item.svg";
import PropTypes, { element } from "prop-types";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

function FoodItems({ foodItems }) {
  const { loggedIn } = useContext(AuthContext);

  const [ editingIsOn, setEditingIsOn ] = useState(false);
  useEffect(() => {
    console.log(editingIsOn)
},[editingIsOn])

  function edit(id) {
    let foodPic = document.querySelector(`.foodItem-pic-${id} img`);
    let foodName = document.querySelector(`.foodItem-foodName-${id} b`);
    let foodSpicy = document.querySelector(`.foodItem-spicy-${id} span`);
    let foodIngr = document.querySelector(`.foodItem-ingr-${id} i`);
    let foodPrice = document.querySelector(`.foodItem-price-${id} b`);
  
    foodName.outerHTML = `<input type=text defaultValue={${foodName.innerHTML}} style="width:100%"></input>`;
    foodSpicy.outerHTML = `<input type=text style="width:100%"></input>`;
    foodIngr.outerHTML = `<input type=text style="width:255%"></input>`;
    foodPrice.outerHTML =`<input type=text style="width:100%"></input>`;
    // foodPic.outerHTML =`<input type=file style="width:100%"></input>`
  }

  function checkSpicyLevel(spicyNumber) {
    const spicyLvl = [];
    for (let i = 0; i < spicyNumber; i++) {
      spicyLvl.push(<img src={spicyIcon} alt="spicy!" key={i} className="spicyIcon" />);
    }
    return spicyLvl;
  }
  return (
    <>
      {foodItems.map((foodItem) => (
        <div className="foodMenuItem md:flex p-10" key={foodItem.id}>
          <div>
            <div className={`foodItem-pic-${foodItem.id}`}>
            <img
              src={`/images/${foodItem.picture}`}
              alt={foodItem.foodName}
              className="foodImage rounded-md max-md:w-full"
            />
            </div>
          </div>
          <div className="nameContainer">
            <div className="name flex text-3xl m-1">
              <div className={`foodItem-foodName-${foodItem.id}`} >
              <b>{foodItem.foodName}</b>
              </div>
              <div className={`foodItem-spicy-${foodItem.id}`}>
              <span className="spicyLvlContainer flex">
                {checkSpicyLevel(foodItem.spicyLevel)}
              </span>
              </div>
            </div>
            <div className="ingredients text-lg m-1 max-w-sm">
              <div className={`foodItem-ingr-${foodItem.id}`}>
              <i>{foodItem.ingredients}</i>
              </div>
            </div>
          </div>
          <div className="addToCartConatiner ml-auto justify-center items-center flex">
            <div className="foodPrice text-3xl items-center">
              <div className={`foodItem-price-${foodItem.id}`}>
              <b>{foodItem.price}€</b>
              </div>
            </div>
            {loggedIn && (
              <button
                className="editFoodItemBtn"
                onClick={() => edit(foodItem.id)
                }
              >
                <img
                  src={editIcon}
                  alt="Edit Item"
                  className="icon editItemIcon"
                />
              </button>
            )}
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
