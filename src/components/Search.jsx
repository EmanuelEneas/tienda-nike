import { useContext } from "react";
import { productsContext } from "../context/ProductsContext";
import './Search.css'
function Search() {
  const { query, handleQuery } = useContext(productsContext);

  return (
    <div className="search-container">
    <form className="search-form">
      <label className="search-label" htmlFor="searchTerm">Search</label>
      <input
        className="search-input"
        type="search"
        id="searchTerm"
        placeholder="flex,Air Max,Free metcon..."
        onChange={(e) => handleQuery(e.target.value)}
      />
    </form>
  </div>
);
}

export default Search;