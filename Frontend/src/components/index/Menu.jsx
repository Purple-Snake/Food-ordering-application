import FoodList from "./FoodItems";
import { default as foodData } from "../../data/placeholderData.json";
import _ from "lodash";

function Menu() {
  const groupedFood = _.groupBy(foodData, "foodGroup");

  return (
    <div>
      {Object.keys(groupedFood).map((group) => (
        <div key={group}>
          <div className="foodGroup" id={group}>
            <h3 className="foodGroupTitle">{group}</h3>
          </div>
          <div className="menuBackground">
            <FoodList foodItems={groupedFood[group]} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
