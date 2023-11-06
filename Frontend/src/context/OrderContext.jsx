import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"

export const OrderContext = createContext()

export const OrderContextProvider = ({ children }) => {
    const [ selectedOrder, setSelectedOrder ] = useState({});
    const [ orderIsSelected, setOrderIsSelected ] = useState(false);

    function selectOrder(order) {
        setSelectedOrder(order)
        setOrderIsSelected(true)
    }

    // Remove useEffect later
    useEffect(() => {
        console.log(selectedOrder);
    }, [selectedOrder]);

    const contextValue = {selectOrder, selectedOrder, orderIsSelected}
    return (<OrderContext.Provider value={contextValue}>{children}</OrderContext.Provider>)
}

OrderContextProvider.propTypes = {
    children: PropTypes.node,
 };

export default OrderContextProvider