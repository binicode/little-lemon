import Logo from "../../assets/Logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Little Lemon logo" className="logo"/>
      <nav className="nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
