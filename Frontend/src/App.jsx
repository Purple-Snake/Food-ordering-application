import "./App.css";
import "./components/cart/cartPage.css"
import "./components/index/homePage.css"
import NavBar from "./components/index/NavBar";
import Home from "./components/index/Home";
import CartPage from "./components/cart/CartPage";
import RegisterForm from "./components/login/RegisterFrom";
import Login from "./components/login/login";
import { Routes, Route } from "react-router-dom";
import ShopContextProvider from "./context/ShopContext";
import axios from "axios";

axios.defaults.withCredentials = true

function App() {
  return (
    <ShopContextProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </ShopContextProvider>
  );
}

export default App;
