import "./App.css";
import "./components/cart/cartPage.css"
import NavBar from "./components/index/NavBar";
import Home from "./components/index/Home";
import CartPage from "./components/cart/CartPage"
import { Routes, Route } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";

function App() {
  return (
    <ShopContextProvider>
      <NavBar />
      <Routes>
        {/* This is for the cart and login pages, gonna need to finish later. */}
        <Route path="/" element={<Home />} />
        <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
