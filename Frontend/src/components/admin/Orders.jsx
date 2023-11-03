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

    useEffect(() => {
        console.log(orderData);
    }, [orderData]);

    if (isLoading) {
        return <p>Loading...</p>;
    }
    return ( 
        <>
            {orderData.map((order) => (
                <div key={order._id}>
                    <Order order={order} />
                </div>
            ))}
        </>
     );
}

export default Orders;