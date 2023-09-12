import userIcon from "../assets/images/user-solid.svg";
import cartIcon from "../assets/images/cart-shopping-solid.svg";
import magnifyingGlassIcon from "../assets/images/magnifying-glass-solid.svg";

function NavBar() {
  return (
    <div id="navbar">
      <h1>TITLE</h1>
      <div className="searchBarContainer">
        <img src={magnifyingGlassIcon} alt="" id="searchIcon" />
        <input type="search" id="searchField"></input>
      </div>
      <div>
        <a href="#">
          <img src={userIcon} alt="User" id="userIcon" />
        </a>
        <a href="#">
          <img src={cartIcon} alt="Cart" id="cartIcon" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
