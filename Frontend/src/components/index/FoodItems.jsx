import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import spicyIcon from "../../assets/images/svg/pepper-hot-solid.svg";
import PropTypes from 'prop-types'
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";

function FoodItems({ foodItems }) {
  const {addToCart} = useContext(ShopContext)

  function checkSpicyLevel(spicyNumber) {
    const spicyLvl = [];
    for (let i = 0; i < spicyNumber; i++) {
      spicyLvl.push(<img src={spicyIcon} alt="spicy!" className="spicyIcon" />);
    }
    return spicyLvl;
  }
  // console.log(foodItems);
  return (
    <>
      {foodItems.map((foodItem) => (
        <div className="foodMenuItem md:flex p-10" key={foodItem.id}>
          <div>
            <img src={foodItem.picture} alt={foodItem.name} className="foodImage rounded-md max-md:w-full" />
          </div>
          <div className="nameContainer">
            <div className="name flex text-3xl m-1">
              <b>{foodItem.name}</b>
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
            <button className="addToCartBtn" onClick={() => addToCart(foodItem.id)}>
              <img
                src={cartIcon}
                alt="Add to cart"
                className="icon addToCartIcon"
              />
            </button>
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
