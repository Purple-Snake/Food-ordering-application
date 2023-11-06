import { createContext } from "react";
import PropTypes from "prop-types"

export const orderContext = createContext()

export const OrderContextProvider = ({ children }) => {


    const contextValue = {}
    return (<orderContext.provider>{children}</orderContext.provider>)
}

OrderContextProvider.propTypes = {
    children: PropTypes.node,
 };

export default OrderContextProvider