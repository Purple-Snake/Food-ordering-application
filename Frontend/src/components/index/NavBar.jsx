import userIcon from "../../assets/images/svg/user-solid.svg";
import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import homeIcon from "../../assets/images/svg/house-solid.svg";
import sidePanelBars from "../../assets/images/svg/bars-solid.svg";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBarItemContainer">
        <div className="sidePanelBtn">
          <img src={sidePanelBars} alt="Side panel" className="icon" />
        </div>
        <a href="/">
          <img src={homeIcon} alt="Home" className="icon" />
        </a>
        <h1 className="title">TITLE</h1>
        <div className="linkConatainer">
          <a href="/userpage">
            <img src={userIcon} alt="User" className="userIcon icon" />
          </a>
          <a href="/cart" className="cartBtn">
            <img src={cartIcon} alt="Cart" className="cartIcon icon" />
          </a>
        </div>
      </div>
      {/* side panel */}
    </div>
  );
}

export default NavBar;
