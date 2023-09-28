import FoodList from "./FoodItems";
import { default as foodData } from "../../data/placeholderData.json";
import _ from "lodash";

function Menu() {
  const groupedFood = _.groupBy(foodData, "foodGroup");

  return (
    <>
      {Object.keys(groupedFood).map((group) => (
        <div key={group}>
          <div className="foodGroup" id={group}>
            <h3 className="foodGroupTitle font-bold">{group}</h3>
          </div>
          <div className="mx-20 rounded-2xl bg-[#7D5A50]">
            <FoodList foodItems={groupedFood[group]} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Menu;
