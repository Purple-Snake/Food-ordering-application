import FoodList from "./FoodItems";
import { default as foodData } from "../../data/placeholderData.json";
import _ from "lodash";

function Menu() {
  const groupedFood = _.groupBy(foodData, "foodGroup");

  return (
    <>
      {Object.keys(groupedFood).map((group) => (
        <div key={group}>
          <div className="foodGroup my-5" id={group}>
            <h3 className="foodGroupTitle font-bold mx-10">{group}</h3>
          </div>
          <div className="mx-20 rounded-2xl bg-[#B4846C] max-md:mx-10">
            <FoodList foodItems={groupedFood[group]} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Menu;
