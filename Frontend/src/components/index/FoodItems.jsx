import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import spicyIcon from "../../assets/images/svg/spicy-level.svg";

function FoodItems(foodItems) {
  function checkSpicyLevel(spicyNumber) {
    const spicyLvl = [];
    for (let i = 0; i < spicyNumber; i++) {
      spicyLvl.push(<img src={spicyIcon} alt="spicy" className="spicyIcon" />);
    }
    return spicyLvl;
  }
  // console.log(foodItems);
  return (
    <div>
      {foodItems.foodItems.map((foodItem) => (
        <div className="foodMenuItem" key={foodItem.id}>
          <div>
            <img src={foodItem.picture} alt="" className="foodImage" />
          </div>
          <div className="nameContainer">
            <div className="name">
              <b>{foodItem.name}</b>
              <span className="spicyLvlContainer">
                {checkSpicyLevel(foodItem.spicyLevel)}
              </span>
            </div>
            <div className="ingredients">
              <i>{foodItem.ingredients}</i>
            </div>
          </div>
          <div className="addToCart">
            <div className="foodPrice">
              <b>{foodItem.price}€</b>
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
      ))}
    </div>
  );
}

export default FoodItems;
