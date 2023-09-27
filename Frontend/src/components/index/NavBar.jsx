import userIcon from "../../assets/images/svg/user-solid.svg";
import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import homeIcon from "../../assets/images/svg/house-solid.svg";
import sidePanelBars from "../../assets/images/svg/bars-solid.svg";

function NavBar() {
  return (
    <div className="navBar w-full h-[100px] flex justify-around items-center bg-[#7D5A50] text-white">
        <div className="sidePanelBtn md:hidden">
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
          <a href="/cart" className="cartBtn md:hidden">
            <img src={cartIcon} alt="Cart" className="cartIcon icon" />
          </a>
        </div>
    </div>
  );
}

export default NavBar;
