import PropTypes from "prop-types"
import { useEffect } from "react"
import axios from "axios"

export const OrderContextProvider = ({children}) => {
    let orderData = {}

    async function getOrders() {
        try {
            const response = await axios.get("http://localhost:3000/menu/getMenu")
            orderData = response.data
        } catch (error) {
            console.error("Error fetching order data from the server");
        }
    }

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