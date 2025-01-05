import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useState } from "react";
import "./Home.css";

function Home() {
  const [activeImage, setActiveImage] = useState({});

  const products = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/61WBg7crTQL._AC_SR700,525_.jpg",
      image2: "https://m.media-amazon.com/images/I/61FxQSqEpOL._AC_SR700,525_.jpg",
      title: "Flex Experience Run 9",
      description:
        " Flex Experience Run 9 Flex grooves in the outsole move naturally with the foot, offering comfort with every step",
    },
    {
      id: 17,
      image: "https://m.media-amazon.com/images/I/71soSeWlu8L._AC_SR700,525_.jpg",
      image2: "https://m.media-amazon.com/images/I/71aE0iPUSYL._AC_SR700,525_.jpg",
      title: "Revolution 5 (Infant/Toddler)",
      description:
        "Nike Adaptive Size Chart for Kids Tennis Nike Kids Revolution 5 rules from the track to the trail",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/81kz-cAPItL._AC_SR700,525_.jpg",
      image2: "https://m.media-amazon.com/images/I/71caHEigvFL._AC_SR700,525_.jpg",
      title: "Phantom GT Club DF FG/MG",
      description:
        "The Nike Phantom GT2 Club MG features an updated design and graphic patterns designed to make you hit the ball with pinpoint precision",
    },
  ];

  const handleImageClick = (id) => {
    setActiveImage((prevState) => ({
      ...prevState,
      [id]: prevState[id] === 1 ? 0 : 1,
    }));
  };

  return (
    <>
      <Header>
        <Navbar />
      </Header>

      <main className="home-container">
        {/* Sección de Fondo Personalizado */}
        <section className="background-section">
          <h1>Welcome to our store</h1>
          <p>Find the best prices</p> e
        </section>

        {/* Sección de Productos Destacados */}
        <section className="featured-section">
          <h2 className="featured-title">Featured Products</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                <img
                  src={activeImage[product.id] ? product.image2 : product.image}
                  alt={product.title}
                  onClick={() => handleImageClick(product.id)}
                  className="product-image"
                />
                <div className="product-info">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
