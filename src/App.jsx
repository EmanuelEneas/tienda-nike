import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { ProductsContextProvider } from "./context/ProductsContext";
import Cart from "./components/Cart";
import Footer from "./components/Footer"; // Importa el Footer

function App() {
  return (
    <BrowserRouter>
      <ProductsContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer /> {/* Muestra el footer al final */}
      </ProductsContextProvider>
    </BrowserRouter>
  );
}

export default App;
