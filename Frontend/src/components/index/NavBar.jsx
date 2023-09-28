import userIcon from "../../assets/images/svg/user-solid.svg";
import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import homeIcon from "../../assets/images/svg/house-solid.svg";
import sidePanelBars from "../../assets/images/svg/bars-solid.svg";
import FoodGroupButtons from "./FoodGroupButtons"
import { useState } from "react";

function NavBar() {
  const [sidePanel, setSidePanel] = useState(false)
  function handleClick() {
    setSidePanel(!sidePanel)
  }
  return (
    <div className="navBar w-full h-[100px] flex justify-around items-center bg-[#7D5A50] text-white">
      {/* dekstop navbar */}
      <div className="sidePanelBtn md:hidden z-10" onClick={handleClick}>
        <img src={sidePanelBars} alt="Side panel" className="icon" />
      </div>
      <a href="/">
        <img src={homeIcon} alt="Home" className="icon" />
      </a>
      <h1 className="title text-6xl">TITLE</h1>
      <div className="flex">
        <a href="/userpage">
          <img src={userIcon} alt="User" className="userIcon icon" />
        </a>
        <a href="/cart" className="cartBtn max-md:hidden">
          <img src={cartIcon} alt="Cart" className="cartIcon icon" />
        </a>
      </div>

      {/* mobile navbar */}
      <ul
        className={!sidePanel ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#7D5A50] flex flex-col justify-center items-center"}>
        <FoodGroupButtons />
      </ul>
      {/* <div className="md:hidden fixed left-0 bottom-0 h-10 w-screen bg-red-700 z-50">
          <a href="/cart">Cart</a>
        </div> */}
    </div>
  );
}

export default NavBar;
