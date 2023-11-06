import PropTypes from "prop-types"
import { useState } from "react";

function Order({ order }) {
    const [delivery] = useState(order.delivery)
    const [selfPickUp] = useState(order.selfPickUp)

    return ( 
        <button className="order">
            <div className="flex">
                <div>User name: {order.userName}</div>
                <div>Order id: {order.orderId}</div>
            </div>
            <div className="orderItems">
                {Object.entries(order.filteredCartItems).map(entry => {
                    let key = entry[0]
                    let value = entry[1]
                    return (<div key={key}>{key}: {value}</div>)
                })}
            </div>
            <div>Total price: {order.totalAmount}€</div>
            {delivery && (
                <div>Delivery address: {order.address}</div>
            )}
            {selfPickUp && (
                <div>Self pickup location: {order.location}</div>
            )}
        </button>
     );
}

Order.propTypes = {
    order: PropTypes.object.isRequired,
  };

export default Order;