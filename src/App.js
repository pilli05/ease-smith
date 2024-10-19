import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products/Products";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Products />} />
          <Route path="/" element={<Navigate to="/products" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
