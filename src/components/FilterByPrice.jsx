import { useContext, useState } from "react";
import { productsContext } from "../context/ProductsContext";
import './FilterByPrice.css';

function FilterByPrice() {
  const { maxPrice, handleMaxPrice } = useContext(productsContext);
  const [price, setPrice] = useState(maxPrice);

  const handleRangeChange = (e) => {
    const value = parseFloat(e.target.value);
    setPrice(value);
    handleMaxPrice(value);
  };

  return (
    <div className="filter-price-container">
      <label></label>
      <input
        className="range-input"
        type="range"
        name="maxPrice"
        id="maxPrice"
        min="0"
        max="120"
        step="0.5"
        value={price}
        onChange={handleRangeChange}
      />
      <p className="price-info">Top price: ${price.toFixed(2)}</p>
    </div>
  );
}

export default FilterByPrice;
