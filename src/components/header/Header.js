import Logo from "../../assets/Logo.svg";
import Nav from "../nav/Nav";
import "./Header.css";

function Header() {
    return(
        <header className="header">               
            <img src={Logo} alt="Little Lemon logo" />
            <Nav />
        </header>
    )
};

export default Header;