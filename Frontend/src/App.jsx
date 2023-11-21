import "./App.css";
import "./components/cart/cartPage.css";
import "./components/index/homePage.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/index/Home";
import CartPage from "./components/cart/CartPage";
import RegisterForm from "./components/login/RegisterFrom";
import Login from "./components/login/Login";
import AdminPage from "./components/admin/AdminPage";
import OrderReceived from "./components/cart/OrderReceived";
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import ShopContextProvider from "./context/ShopContext";
import { OrderContextProvider } from "./context/OrderContext";
import { AdminContextProvider } from "./context/AdminContext";
import { AuthContext } from "./context/authContext";
import axios from "axios";
import EditMenu from "./components/admin/edit-menu/EditMenu";

axios.defaults.withCredentials = true;

function App() {
  const { loggedIn, userRole } = useContext(AuthContext);
  return (
    <ShopContextProvider>
      <OrderContextProvider>
        {userRole === "admin" ? (
          <>
            <AdminContextProvider>
              <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                {loggedIn && (
                  <>
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/orderCompleted" element={<OrderReceived />} />
                  </>
                )}
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="/adminFood" element={<EditMenu />} />
              </Routes>
            </AdminContextProvider>
          </>
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              {loggedIn && (
                <>
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/orderCompleted" element={<OrderReceived />} />
                </>
              )}
              <Route path="/register" element={<RegisterForm />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        )}
      </OrderContextProvider>
    </ShopContextProvider>
  );
}

export default App;
