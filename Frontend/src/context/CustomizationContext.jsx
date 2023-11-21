import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios"

export const CustomizationContext = createContext();

export const CustomizationContextProvider = ({ children }) => {
  const [ colourValues, setColourValues ] = useState({});

  async function getColours() {
    let response = await axios.get("http://localhost:3000/custom/getCustomization/")
    response.data.map((entry) => {
      setColourValues(entry)
    })
  }

  useEffect(() => {
    getColours()
  }, [])

  useEffect(() => {
    console.log(colourValues);
  }, [colourValues])
    

  const contextValue = {colourValues};
  return (
    <CustomizationContext.Provider value={contextValue}>
      {children}
    </CustomizationContext.Provider>
  );
};

CustomizationContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomizationContextProvider;
