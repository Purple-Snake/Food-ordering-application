import "./App.css";
import "./components/cart/cartPage.css";
import "./components/index/homePage.css";
import NavBar from "./components/index/NavBar";
import Home from "./components/index/Home";
import CartPage from "./components/cart/CartPage";
import RegisterForm from "./components/login/RegisterFrom";
import Login from "./components/login/login";
import AdminPage from "./components/admin/AdminPage";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import ShopContextProvider from "./context/ShopContext";
import { OrderContextProvider } from "./context/OrderContext";
import { AuthContext } from "./context/authContext";
import axios from "axios";

axios.defaults.withCredentials = true;

function App() {
  const { loggedIn, userRole } = useContext(AuthContext);
  return (
    <ShopContextProvider>
      <OrderContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          {loggedIn && <Route path="/cart" element={<CartPage />} />}
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          {userRole == "admin" && <Route path="/admin" element={<AdminPage />} />}
        </Routes>
      </OrderContextProvider>
    </ShopContextProvider>
  );
}

export default App;
