import PropTypes from "prop-types"
import { createContext, useEffect } from "react"
import axios from "axios"

export const OrderContext = createContext()

let orderData = []

async function getOrders() {
    try {
        const response = await axios.get("http://localhost:3000/order/getOrders");
        orderData = response.data
    } catch (error) {
        console.error("Error fetching order data from the server");
    }
}

export const OrderContextProvider = ({children}) => {
    useEffect(() => {
        getOrders()
    }, [])

    const contextValue = {orderData}
    return ( <OrderContextProvider value={contextValue}>{children}</OrderContextProvider> )
}

OrderContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
 };

export default OrderContextProvider