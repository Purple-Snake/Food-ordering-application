import FoodList from "./FoodItems";
import { default as foodData } from "../../data/placeholderData.json";
import _ from "lodash";

function Menu() {
  const groupedFood = _.groupBy(foodData, "foodGroup");

  return (
    <div>
      {Object.keys(groupedFood).map((group) => (
        <div key={group}>
          <h2 className="foodGroup" id={group}>
            {group}
          </h2>
          <div id="menuBackground">
            <FoodList foodItems={groupedFood[group]} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
