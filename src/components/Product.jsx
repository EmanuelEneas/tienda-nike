import { useContext, useState } from "react";
import { productsContext } from "../context/ProductsContext";
import "./Product.css";

function Product({ prod }) {
  const { addToCart } = useContext(productsContext);
  const [showSecondImage, setShowSecondImage] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleImage = () => {
    setShowSecondImage((prevState) => !prevState);
  };

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  return (
    <div className="product-card" onClick={toggleDescription}>
      <h3 className="product-title">{prod.title}</h3>
      <div
        className={`product-image-container ${showSecondImage ? "clicked" : ""}`}
        onClick={(e) => {
          e.stopPropagation(); // Evita que el clic en la imagen alterne la descripción
          toggleImage();
        }}
      >
  <img
    className="product-image image1"
    src={prod.image}
    alt={prod.title}
    loading="lazy"
  />
  {prod.img2 && (
    <img
      className="product-image image2"
      src={prod.img2}
      alt={`${prod.title} alternate 2`}
      loading="lazy"
    />
  )}
  
</div>
      <div className="product-details">
        <p className="product-description">
          {showFullDescription
            ? prod.description
            : `${prod.description.slice(0, 40)}...`}
        </p>
        <div className="product-price-btn">
          <p className="product-price">${prod.price.toFixed(2)}</p>
          <button
            className="product-btn"
            onClick={(e) => {
              e.stopPropagation(); // Evita que el clic en el botón alterne la descripción
              addToCart(prod);
            }}
            aria-label={`Add ${prod.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;

