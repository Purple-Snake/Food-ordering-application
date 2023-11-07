import { useContext, useState } from "react";
import { OrderContext } from "../../context/OrderContext";
import axios from "axios";

function SelectedOrder() {
  const { selectedOrder, orderIsSelected } = useContext(OrderContext);
  const [confirmPanel, setConfirmPanel] = useState(false);

  async function deleteOrder() {
    try {
      await axios.delete(`http://localhost:3000/order/deleteOrder/${selectedOrder._id}`)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      {orderIsSelected && (
        <div className="selected-order-container m-auto ml-20 relative">
          <div className="selected-order w-80 h-96 p-4 rounded-md z-10 relative">
            <h1>Selected order</h1>
            <div className="flex">
              <div className="user-name mr-4">
                User name: {selectedOrder.userName}
              </div>
              <div className="order-id">Order id: {selectedOrder.orderId}</div>
            </div>
            <div className="orderItems">
              {Object.entries(selectedOrder.filteredCartItems).map((entry) => {
                let key = entry[0];
                let value = entry[1];
                return (
                  <div className="order-item" key={key}>
                    {key}: {value}
                  </div>
                );
              })}
            </div>
            <div className="absolute bottom-32">
              Total price: {selectedOrder.totalAmount}€
            </div>
            {selectedOrder.delivery && (
              <div className="absolute bottom-20">
                Delivery address: {selectedOrder.address}
              </div>
            )}
            {selectedOrder.selfPickUp && (
              <div className="absolute bottom-20">
                Self pickup location: {selectedOrder.location}
              </div>
            )}
            <div className="absolute bottom-1">
              <button className="mr-10" onClick={() => setConfirmPanel(true)}>
                Cancel order
              </button>
              <button>Complete order</button>
            </div>
          </div>
          <button
            className={`confirm-panel absolute bottom-0 left-5 rounded-md p-1 ${
              confirmPanel ? "active" : ""}`}
            onClick={() => {
              deleteOrder()
            }}
          >
            Confirm
          </button>
        </div>
      )}
      {!orderIsSelected && (
        <div className="selected-order w-80 h-96 p-4 rounded-md m-auto ml-20 relative">
          No order selected
        </div>
      )}
    </>
  );
}

export default SelectedOrder;