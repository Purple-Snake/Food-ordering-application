import { useEffect, useState } from "react";
import Order from "./Order"
import axios from "axios";

function Orders() {
    const [orderData, setOrderData] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function getOrders() {
            try {
                const response = await axios.get("http://localhost:3000/order/getOrders")
                setOrderData(response.data)
                setIsLoading(false)
            } catch (error) {
                console.log(error);
                setIsLoading(false)
            }
        }
        getOrders();
    }, [])

    // This is to check the object, remove later.
    useEffect(() => {
        console.log(orderData);
    }, [orderData]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return ( 
        <div className="order-list-container">
        <div className="order-list flex-col">
            {orderData.map((order) => (
                <div className="m-5" key={order._id}>
                    <Order order={order} />
                </div>
            ))}
        </div>
        </div>
     );
}

export default Orders;