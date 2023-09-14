import cartIcon from "../assets/images/svg/cart-shopping-solid.svg";

function FoodItems(foodItem) {
  console.log(foodItem);
  return (
    <div>
      <div>
        <img src={foodItem.foodItem.picture} alt="" />
      </div>
      <div ></div>
      <button>
        <img src={cartIcon} alt="Add to cart" id="cartIcon" />
      </button>
    </div>
  );
}

export default FoodItems;
