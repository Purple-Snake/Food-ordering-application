import userIcon from "../../assets/images/svg/user-solid.svg";
import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import homeIcon from "../../assets/images/svg/house-solid.svg";
import sidePanelBars from "../../assets/images/svg/bars-solid.svg";
import FoodGroupButtons from "./FoodGroupButtons"
import { Link } from "react-router-dom"
import { useState } from "react";

function NavBar() {
  const [sidePanel, setSidePanel] = useState(false)
  function handleClick() {
    setSidePanel(!sidePanel)
    document.body.style.overflow = sidePanel ? 'auto' : 'hidden';
  }
  return (
    <div className="navBar w-full h-[100px] flex justify-around items-center bg-[#7D5A50] text-white relative z-10">
      {/* dekstop navbar */}
      <div className="sidePanelBtn md:hidden z-10" onClick={handleClick}>
        <img src={sidePanelBars} alt="Side panel" className="icon" />
      </div>
      <Link to="/">
        <img src={homeIcon} alt="Home" className="icon" />
      </Link>
      <h1 className="title text-6xl">TITLE</h1>
      <div className="flex">
        <Link to="/userpage">
          <img src={userIcon} alt="User" className="userIcon icon" />
        </Link>
        <Link to="/cart" className="cartBtn max-md:hidden">
          <img src={cartIcon} alt="Cart" className="cartIcon icon" />
        </Link>
      </div>

      {/* mobile navbar */}
      <ul
        className={!sidePanel ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#7D5A50] flex flex-col justify-center items-center"}>
        <FoodGroupButtons closeSidePanel={handleClick}/>
      </ul>
      <div className={!sidePanel ? "md:hidden fixed bottom-0 h-14 w-screen bg-[#7D5A50] z-50 flex" : "hidden"}>
        <a href="/cart" className="m-auto w-4/5 h-2/3 bg-black text-center rounded-md">
          <button className="text-lg m-auto">Cart</button>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
