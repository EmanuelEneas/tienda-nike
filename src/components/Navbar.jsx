import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">start</Link>
      <Link className="nav-link" to="/products">Products</Link>
      <Link className="nav-link" to="/cart">Cart</Link>

      {/* Botón de Contacto por WhatsApp */}
      <a
        className="nav-link"
        href="https://api.whatsapp.com/send?phone=5491169696440" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Contact by Whasapp
      </a>

      {/* Botón de Ubicación */}
      <a
        className="nav-link"
        href="https://www.bing.com/maps?q=nike+argentina&FORM=HDRSC6&cp=-34.589552%7E-58.449626&lvl=15.0"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ubicación
      </a>
    </nav>
  );
}

export default Navbar;
