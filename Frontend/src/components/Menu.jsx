import FoodItems from "./FoodItems";
import { default as foodData } from "../data/data.json";

function Menu() {
  let fooditemsjsx = foodData.map((food) => {
    return <FoodItems key={food.id} foodItem={food} />;
  });
  return (
    <div>
      <h2>
        <b>Food group 1</b>
      </h2>
      <div>{fooditemsjsx}</div>
    </div>
  );
}

export default Menu;