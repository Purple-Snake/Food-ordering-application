import FoodItems from "./FoodItems";
import { default as foodData } from "../../data/placeholderData.json";

function Menu() {
  let fooditemsjsx = foodData.map((food) => {
    return <FoodItems key={food.id} foodItem={food} />;
  });
  return (
    <div>
      <div id="menuBackground">
        <div id="theFoodMenuItems">{fooditemsjsx}</div>
      </div>
    </div>
  );
}

export default Menu;
