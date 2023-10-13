import { useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";

function Payment() {
  const [delivery, setDelivery] = useState(false)
  const [selfPickUp, setSelfPickUp] = useState(false)
  const { getTotalAmount } = useContext(ShopContext);

  const totalAmount = getTotalAmount()

  function handleChangeDelivery() {
    if (delivery == false) {
      setDelivery(true)
      setSelfPickUp(false)
      console.log("selected delivery");
    } 
  }
  function handleChangeSelfPickup() {
    if (selfPickUp == false)
    setDelivery(false)
    setSelfPickUp(true)
    console.log("selected self pickup");
  }
  return (
    <div className="paymentContainer w-1/4 max-md:w-auto p-5 m-10 rounded-md h-min">
      <form action="">
        <label htmlFor="cardNumber">Card Number</label>
        <br />
        <input type="number" id="cardNumber" className="bg-[#D9D9D9] rounded-md border-2 border-black py-1" required/>
        <br />
        <label htmlFor="expiryDate">Expiry Date</label>
        <br />
        <input type="text" id="expiryDate" className="bg-[#D9D9D9] rounded-md border-2 border-black py-1" required/>
        <br />
        <label htmlFor="magicNumber">CVC/CVV</label>
        <br />
        <input type="number" id="magicNumber" className="bg-[#D9D9D9] rounded-md border-2 border-black py-1" required/>
        <br />
        <input type="radio" id="delivery" name="deliveryMethod" onChange={handleChangeDelivery} value={delivery == false} required/>
        <span>Delivery</span>
        <input type="radio" id="selfPickup" name="deliveryMethod" onChange={handleChangeSelfPickup} value={selfPickUp == false}/>
        <span>Self Pickup</span>
        <div className={delivery ? "" : "hidden"}>
          <input type="text" placeholder="Address" className="bg-[#D9D9D9] rounded-md border-2 border-black" />
        </div>
        <div className={selfPickUp ? "" : "hidden"}>
          Address of food place
        </div>
        <div className="mt-5">
          <span className="totalPrice text-xl">Total: {totalAmount}€</span>
          <input type="submit" value="submit" className="bg-[#000] text-white text-xl p-1 ml-3 rounded-md" />
        </div>
      </form>
    </div>
  );
}

export default Payment;
