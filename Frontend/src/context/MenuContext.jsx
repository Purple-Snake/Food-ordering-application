import PropTypes from "prop-types"
import _ from "lodash";
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
    let foodData = []
    const [groupedFood, setGroupedFood] = useState({});
  
    useEffect(() => {
    async function getMenu() {
      foodData = await axios.get("http://localhost:3000/menu/getMenu")
      const grouped = _.groupBy(foodData.data, "foodGroup");
      setGroupedFood(grouped)
    }
    getMenu()
  }, [])

  const contextValue = {groupedFood}
    return ( 
        <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
     );
}

MenuContextProvider.propTypes = {
    children: PropTypes.node,
 };

export default MenuContextProvider