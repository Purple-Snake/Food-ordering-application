import { createContext, useState, useEffect } from "react";
import PropTypes from 'prop-types';
import axios from "axios";
import _ from "lodash";


export const ShopContext = createContext(null);

let menuData = [];
let cart = {};
async function getTheMenu() {
    try {
        const response = await axios.get("http://localhost:3000/menu/getMenu")
        menuData = response.data
            for (let i = 0; i < menuData.length + 1; i++) {
                cart[i] = 0
            }
    } catch (error) {
        console.error("Error fetching menu data from the server");
    }
}

export const ShopContextProvider = ({children}) => {    
    const [cartItems, setCartItems] = useState(cart)
    const [groupedFood, setGroupedFood] = useState({});

    useEffect(() => {
        getTheMenu().then(() => {
            const grouped = _.groupBy(menuData, "foodGroup");
            setGroupedFood(grouped)
        })
    }, [])


        const getTotalAmount  = () => {
            let totalAmount = 0
            for (const item in cartItems) {
                if (cartItems[item] > 0) {
                    let itemInfo = menuData.find((product) => product.id === Number(item))
                    totalAmount += cartItems[item] * itemInfo.price
                }
            }
            return totalAmount.toFixed(2)
        }

        const addToCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
        }

        const removeFromCart = (itemId) => {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
        }

        const contextValue = {cartItems, addToCart, removeFromCart, getTotalAmount, groupedFood, menuData}

    return ( <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider> );
}

ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
 };

export default ShopContextProvider;