import { createContext, useState } from "react";
import placeholderData from "../data/placeholderData.json";
import PropTypes from 'prop-types';


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {}
    for (let i = 0; i < placeholderData.length + 1; i++) {
        cart[i] = 0
    }
    return cart
}

export const ShopContextProvider = ({children}) => {
        const [cartItems, setCartItems] = useState(getDefaultCart())

        const getTotalAmount  = () => {
            let totalAmount = 0
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    let itemInfo = placeholderData.find((product) => product.id === Number(item))
                    totalAmount += cartItems[item] * itemInfo.price
                }
            }
            return totalAmount
        }

        const addToCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        }

        const removeFromCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
        }

        const contextValue = {cartItems, addToCart, removeFromCart, getTotalAmount}
        console.log(cartItems);
    return ( <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider> );
}

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
 };

export default ShopContextProvider;

