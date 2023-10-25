import FoodList from "./FoodItems";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

function Menu() {
  const { groupedFood } = useContext(MenuContext)
  
  return (
    <>
      {Object.keys(groupedFood).map((group) => (
        <div key={group}>
          <div className="foodGroup my-5" id={group}>
            <h3 className="foodGroupTitle font-bold mx-10">{group}</h3>
          </div>
          <div className="foodList mx-20 rounded-2xl max-md:mx-10">
            <FoodList foodItems={groupedFood[group]} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Menu;
