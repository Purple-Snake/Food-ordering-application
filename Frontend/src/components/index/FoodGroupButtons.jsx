import PropTypes from "prop-types";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function FoodGroupButtons({ closeSidePanel, sidePanel }) {
  
  function scrollToFoodGroup(group) {
    const element = document.getElementById(group);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (sidePanel == true) {
      closeSidePanel()
    }
  }

  const { groupedFood } = useContext(ShopContext)

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

FoodGroupButtons.propTypes = {
  closeSidePanel: PropTypes.func,
  sidePanel: PropTypes.bool,
};

export default FoodGroupButtons;
