import userIcon from "../../assets/images/svg/user-solid.svg";
import cartIcon from "../../assets/images/svg/cart-shopping-solid.svg";
import magnifyingGlassIcon from "../../assets/images/svg/magnifying-glass-solid.svg";

function NavBar() {
  return (
    <div id="navBar">
      <div className="navBarItemContainer">
        <h1>TITLE</h1>
          <form className="searchForm" action="">
            <button id="searchButton">
              <img
                src={magnifyingGlassIcon}
                alt=""
                id="searchIcon"
                className="icon"
              />
            </button>
            <input type="search" id="searchField" placeholder="Search"></input>
          </form>
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
