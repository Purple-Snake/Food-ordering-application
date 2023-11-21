import { createContext } from "react";
import PropTypes from "prop-types";

export const CustomizationContext = createContext();

export const CustomizationContextProvider = ({ children }) => {
    

  const contextValue = {};
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
