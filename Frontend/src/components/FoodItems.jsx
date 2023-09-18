import cartIcon from "../assets/images/svg/cart-shopping-solid.svg";

function FoodItems(foodItem) {
  console.log(foodItem);
  return (
    <div id="foodMenuItem">
      <div>
        <img src={foodItem.foodItem.picture} alt="" id="foodImage" />
      </div>
      <div id="nameContainer">
        <div id="name">
          <b>{foodItem.foodItem.name}</b>
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
