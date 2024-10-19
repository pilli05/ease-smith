import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";
import ThankYou from "./pages/ThankYou/ThankYou";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
