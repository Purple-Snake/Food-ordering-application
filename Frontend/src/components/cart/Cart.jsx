import { default as foodData } from "../../data/placeholderData.json";
import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import CartItem from "./CartItem";

function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cartItems bg-[#7D5A50] m-10 w-3/5 max-md:w-auto rounded-md h-min">
      <h1 className="cartTitle m-5 text-3xl">Your Cart</h1>
      {foodData.map((item) => {
        if (cartItems[item.id] !== 0) {
          return (
            <CartItem cartItem={item} cartData={cartItems} key={item.id}/>
          )
        }
      })}
    </div>
  );
}

export default Cart;
