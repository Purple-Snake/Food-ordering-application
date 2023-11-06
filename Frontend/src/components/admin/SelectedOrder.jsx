import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

function SelectedOrder() {
  const { selectedOrder, orderIsSelected } = useContext(OrderContext);

  return (
    <>
      {orderIsSelected && (
        <div className="selected-order w-60">
          <h1>Selected order</h1>
          <div className="flex">
            <div>User name: {selectedOrder.userName}</div>
            <div>Order id: {selectedOrder.orderId}</div>
          </div>
          <div className="orderItems">
            {Object.entries(selectedOrder.filteredCartItems).map((entry) => {
              let key = entry[0];
              let value = entry[1];
              return (
                <div key={key}>
                  {key}: {value}
                </div>
              );
            })}
          </div>
          <div>Total price: {selectedOrder.totalAmount}€</div>
          {selectedOrder.delivery && (
            <div>Delivery address: {selectedOrder.address}</div>
          )}
          {selectedOrder.selfPickUp && (
            <div>Self pickup location: {selectedOrder.location}</div>
          )}
          <div>
            <button>Cancel order</button>
            <button>Complete order</button>
          </div>
        </div>
      )}
      {!orderIsSelected && (
        <div>No order selected</div>
      )}
    </>
  );
}

export default SelectedOrder;
