import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import spicyIcon from "../../assets/images/svg/pepper-hot-solid.svg";

function FoodItems(foodItems) {
  function checkSpicyLevel(spicyNumber) {
    const spicyLvl = [];
    for (let i = 0; i < spicyNumber; i++) {
      spicyLvl.push(<img src={spicyIcon} alt="spicy!" className="spicyIcon" />);
    }
    return spicyLvl;
  }
  // console.log(foodItems);
  return (
    <div className="my-5">
      {foodItems.foodItems.map((foodItem) => (
        <div className="foodMenuItem" key={foodItem.id}>
          <div>
            <img src={foodItem.picture} alt={foodItem.name} className="foodImage" />
          </div>
          <div className="nameContainer">
            <div className="name flex">
              <b>{foodItem.name}</b>
              <span className="spicyLvlContainer flex">
                {checkSpicyLevel(foodItem.spicyLevel)}
              </span>
            </div>
            <div className="ingredients">
              <i>{foodItem.ingredients}</i>
            </div>
          </div>
          <div className="addToCartConatiner">
            <div className="foodPrice">
              <b>{foodItem.price}€</b>
            </div>
            <button className="addToCartBtn">
              <img
                src={cartIcon}
                alt="Add to cart"
                className="icon addToCartIcon"
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FoodItems;
