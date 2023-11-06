import PropTypes from "prop-types"
import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext"

function Order({ order }) {
    const { selectOrder } = useContext(OrderContext)

    return ( 
        <button className="order" onClick={() => selectOrder(order)}>
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
        </button>
     );
}

Order.propTypes = {
    order: PropTypes.object.isRequired,
  };

export default Order;