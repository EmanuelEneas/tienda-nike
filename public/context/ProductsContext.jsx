import React, { useState, useEffect, createContext } from "react";
import { getAllProducts } from "../services/productService";
import { initialProduct } from "../services/initialProduct";
export const productsContext = createContext([initialProduct]);

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortedMaxToMin, setSortedMaxToMin] = useState(false);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [query, setQuery] = useState("");

  const handleSort = () => {
    if (sortedMaxToMin) {
      const sortedProducts = products.toSorted((a, b) => a.price - b.price);
      setProducts(sortedProducts);
    } else {
      const sortedProducts = products.toSorted((a, b) => b.price - a.price);
      setProducts(sortedProducts);
    }
    setSortedMaxToMin(!sortedMaxToMin);
  };
  const handleMaxPrice = (price) => setMaxPrice(price);
  const handleQuery = (searchTerm) => setQuery(searchTerm);


  const addToCart = (prod) => {
    setCart((prevValue) => [...prevValue, prod]);
  };
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const fetchData = async () => {
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
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <productsContext.Provider
      value={{
        products,
        cart,
        isLoading,
        error,
        sortedMaxToMin,
        maxPrice,
        query,
        addToCart,
        removeFromCart,
        handleQuery,
        handleSort,
        handleMaxPrice,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};
