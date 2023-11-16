import FoodItems from "./editFoodItems";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const AdminFoodItems = () => {

  const { groupedFood } = useContext(ShopContext)
  return (
    <>
      {Object.keys(groupedFood).map((group) => (
        <div key={group}>
          <div className="foodGroup my-5" id={group}>
            <h3 className="foodGroupTitle font-bold mx-10">{group}</h3>
          </div>
          <div className="foodList mx-20 rounded-2xl max-md:mx-10">
            <FoodItems foodItems={groupedFood[group]} />
          </div>
        </div>
      ))}
    </>
  );
}

  export default AdminFoodItems;