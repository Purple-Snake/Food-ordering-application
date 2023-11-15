import spicyIcon from "../../assets/images/svg/pepper-hot-solid.svg";
import editIcon from "../../assets/images/svg/edit-item.svg";
import PropTypes from "prop-types";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/authContext";

function FoodItems({ foodItems }) {
  const { loggedIn } = useContext(AuthContext);

  const [ editingIsOn, setEditingIsOn ] = useState(false);
  useEffect(() => {
    console.log(editingIsOn)
},[editingIsOn])

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
            <img
              src={`/images/${foodItem.picture}`}
              alt={foodItem.foodName}
              className="foodImage rounded-md max-md:w-full"
            />
          </div>
          <div className="nameContainer">
            <div className="name flex text-3xl m-1">
              <b>{foodItem.foodName}</b>
              <span className="spicyLvlContainer flex">
                {checkSpicyLevel(foodItem.spicyLevel)}
              </span>
            </div>
            <div className="ingredients text-lg m-1 max-w-sm">
              <i>{foodItem.ingredients}</i>
            </div>
          </div>
          <div className="addToCartConatiner ml-auto justify-center items-center flex">
            <div className="foodPrice text-3xl items-center">
              <b>{foodItem.price}€</b>
            </div>
            {loggedIn && (
              <button
                className="editFoodItemBtn"
                onClick={() => setEditingIsOn(true)
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
