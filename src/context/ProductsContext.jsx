import React, { useState, useEffect, createContext, useCallback } from "react";
import { getAllProducts } from "../services/productService";
import { initialProduct } from "../services/initialProduct";
import "./ProductsContext.css";

export const productsContext = createContext([initialProduct]);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [maxPrice, setMaxPrice] = useState(120);
  const [query, setQuery] = useState("");



  // Actualizar el precio máximo
  const handleMaxPrice = (price) => setMaxPrice(price);

  // Actualizar la consulta de búsqueda
  const handleQuery = (searchTerm) => setQuery(searchTerm);

  // Agregar al carrito
  const addToCart = (prod) => {
    setCart((prevValue) => [...prevValue, prod]);
  };

  // Eliminar del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Obtener los productos
  const fetchData = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getAllProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Ejecutar fetchData al montar el componente
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Filtrar productos según el precio máximo y la búsqueda
  const filteredProducts = products.filter(
    (prod) =>
      prod.price <= maxPrice &&
      prod.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <productsContext.Provider
      value={{
        products: filteredProducts,
        cart,
        isLoading,
        error,
        maxPrice,
        query,
        addToCart,
        removeFromCart,
        handleQuery,
        handleMaxPrice,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
