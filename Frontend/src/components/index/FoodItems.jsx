import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import spicyIcon from "../../assets/images/png/spicy-lvl-placeholder.png";

function FoodItems(foodItem) {
  // console.log(foodItem);
  function checkSpicyLevel(spicyNumber) {
    const spicyLvl = []
    for (let i = 0; i < spicyNumber; i++) {
      spicyLvl.push(
        <img src={spicyIcon} alt="spicy" className="spicyIcon"/>
      )
    }
    return spicyLvl
  }
  return (
    <div id="foodMenuItem">
      <div>
        <img src={foodItem.foodItem.picture} alt="" id="foodImage" />
      </div>
      <div id="nameContainer">
        <div id="name">
          <b>{foodItem.foodItem.name}</b>
          <span className="spicyLvlContainer">{checkSpicyLevel(foodItem.foodItem.spicyLevel)}</span>
        </div>
        <div id="ingredients">
          <i>{foodItem.foodItem.ingredients}</i>
        </div>
      </div>
      <div id="addToCart">
        <div id="foodPrice">
          <b>{foodItem.foodItem.price}€</b>
        </div>
        <button>
          <img
            src={cartIcon}
            alt="Add to cart"
            id="addToCartIcon"
            className="icon"
          />
        </button>
      </div>
    </div>
  );
}

export default FoodItems;
