import userIcon from "../assets/images/user-solid.svg";
import cartIcon from "../assets/images/cart-shopping-solid.svg";
import magnifyingGlassIcon from "../assets/images/magnifying-glass-solid.svg"

function NavBar() {
  return (
    <div id="navbar">
      <h2>TITLE</h2>
      <div>
        <img src={magnifyingGlassIcon} alt="" />
        <input type="search" id="searchField"></input>
      </div>
      <button>
        <img src={userIcon} alt="User" id="userIcon" />
      </button>
      <button>
        <img src={cartIcon} alt="Cart" id="cartIcon" />
      </button>
    </div>
  );
}

export default NavBar;
