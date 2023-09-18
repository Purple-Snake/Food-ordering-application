import userIcon from "../../assets/images/svg/user-solid.svg";
import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import magnifyingGlassIcon from "../../assets/images/svg/magnifying-glass-solid.svg";

function NavBar() {
  return (
    <div id="navbar">
      <h1>TITLE</h1>
      <div className="searchBarContainer">
        <img src={magnifyingGlassIcon} alt="" id="searchIcon" className="icon" />
        <input type="search" id="searchField"></input>
      </div>
      <div>
        <a href="#">
          <img src={userIcon} alt="User" id="userIcon" className="icon" />
        </a>
        <a href="#">
          <img src={cartIcon} alt="Cart" id="cartIcon" className="icon"/>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
