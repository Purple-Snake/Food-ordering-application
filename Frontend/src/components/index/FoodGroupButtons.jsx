import { default as foodData } from "../../data/placeholderData.json";
import _ from "lodash";

function FoodGroupButtons() {
  const groupedFood = _.groupBy(foodData, "foodGroup");
  
  function scrollToFoodGroup(group) {
    const element = document.getElementById(group);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
      <div className="groupButtons flex justify-center max-md:flex-col">
        {Object.keys(groupedFood).map((group) => (
          <button key={group} className="foodGroupButton" onClick={() => scrollToFoodGroup(group)}>
            {group}
          </button>
        ))}
      </div>
  );
}

export default FoodGroupButtons;
