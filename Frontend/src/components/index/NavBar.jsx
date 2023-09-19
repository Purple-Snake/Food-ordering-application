import userIcon from "../../assets/images/svg/user-solid.svg";
import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import homeIcon from "../../assets/images/svg/house-solid.svg"

function NavBar() {
  return (
    <div id="navBar">
      <div className="navBarItemContainer">
        <a href="/">
          <img src={homeIcon} alt="Home" className="icon" />
        </a>
        <h1>TITLE</h1>
        <div className="linkConatainer">
          <a href="/userpage">
            <img src={userIcon} alt="User" id="userIcon" className="icon" />
          </a>
          <a href="/cart">
            <img src={cartIcon} alt="Cart" id="cartIcon" className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
