// pages/Products.js
import React, { useContext, useMemo } from "react";
import Product from "../components/Product";
import "./Products.css";

import { productsContext } from "../context/ProductsContext";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import FilterByPrice from "../components/FilterByPrice";
import Search from "../components/Search";
import CartSummary from "../components/CartSummary";

function Products() {
  // Desestructuración de valores del contexto
  const { products, isLoading, error, maxPrice, query } = useContext(productsContext);

  // Filtrar productos de manera eficiente utilizando useMemo para evitar cálculos innecesarios en cada render
  const filteredProducts = useMemo(
    () =>
      products.filter(
        (prod) =>
          prod.price <= maxPrice &&
          prod.title.toLowerCase().includes(query.toLowerCase())
      ),
    [products, maxPrice, query] // Solo recalcula cuando products, maxPrice o query cambien
  );

  return (
    <>
      <Header>
        <Navbar />

        <div className="search-container">
          <Search />
          <CartSummary />
        </div>

        <FilterByPrice />
      </Header>

      <main className="products-container">
        {isLoading ? (
          <div className="loading-spinner">loading products...</div>
        ) : error ? (
          <div className="error-message">Error: {error}</div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((prod) => <Product prod={prod} key={prod.id} />)
        ) : (
          <div className="empty-cart-message">no products found 🛒</div>
        )}
      </main>

    </>
  );
}

export default Products;

