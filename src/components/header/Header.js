import { useState } from "react";
import Hamburger from "../icons/Hamburger";
import Logo from "../../assets/Logo.svg";
import "./Header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <img src={Logo} alt="Little Lemon logo" className="logo" />
      <nav className={`nav ${isMenuOpen ? "active" : ""}`} aria-label="Primary navigation">
        <ul id="primary-navigation">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="/reservation">Reservations</a>
          </li>
          <li>
            <a href="#menu">Order online</a>
          </li>
          <li>
            <a href="/reservation">Login</a>
          </li>
        </ul>
      </nav>
      <Hamburger
        size={32}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
      />
    </header>
  );
}

export default Header;
