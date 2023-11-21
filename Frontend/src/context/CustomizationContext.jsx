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

  function setColours() {
    const root = document.querySelector(":root")

    root.style.setProperty("--background-color", `${colourValues.background_colour}`)
    root.style.setProperty("--Primary", `${colourValues.primary_colour}`);
    root.style.setProperty("--Secondary", `${colourValues.secondary_colour}`)
    // root.style.setProperty("", `${colourValues._colour}`)
  }

  useEffect(() => {
    getColours().then(() => setColours())
  }, [])  

  useEffect(() => {
    console.log(colourValues);
    console.log(colourValues.background_colour);
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
