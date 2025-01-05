import React from "react";
import "./Header.css";

function Header({ children, title = "E-commerce", style, className }) {
  return (
    <header className={`header ${className || ""}`} style={style} role="banner" aria-label="Header section">
      <div className="logo">
        <h1 className="header-title">{title}</h1>
      </div>
      <nav className="nav-links">
        {children}
      </nav>
    </header>
  );
}

export default Header;
