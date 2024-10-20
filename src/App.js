import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import ThankYou from "./pages/ThankYou/ThankYou";
import Footer from "./components/Footer/Footer";
import { createContext, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export const CartContext = createContext();

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <CartContext.Provider value={{ cartCount, setCartCount }}>
      <div className="">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/" element={<Navigate to="/products" />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        <div className="bottom-[20px] right-[20px] sticky flex justify-end bg-trasparent mr-[20px] z-50">
          <div className="">
            <img
              src="/assets/whatsapp-image.png"
              alt="whatsapp-icon"
              className="animate-bounce cursor-pointer"
            />
            <FaAngleUp
              className="cursor-pointer bg-[#6E6E6E] rounded-full p-2 ml-2 hover:bg-[#504f4f]"
              size={45}
              color="white"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          </div>
        </div>
      </div>
    </CartContext.Provider>
  );
}

export default App;
